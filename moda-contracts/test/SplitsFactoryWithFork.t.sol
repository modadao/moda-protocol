// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {SplitsFactory} from "../src/SplitsFactory.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";
import {IManagement} from "../src/interfaces/IManagement.sol";
import {ISplitMain} from "../src/interfaces/0xSplits/ISplitMain.sol";
import {IOfficialContracts} from "../src/interfaces/Registry/IOfficialContracts.sol";
import {SplitMainMock} from "./mocks/SplitMainMock.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "forge-std/Test.sol";

contract Registry is IOfficialContracts {
    address _treasury;
    uint32 _fee;
    uint32 _feeMultiplier;

    constructor(address treasury, uint32 fee, uint32 feeMultiplier) {
        _treasury = treasury;
        _fee = fee;
        _feeMultiplier = feeMultiplier;
    }

    function getTreasuryInfo() external view returns (address, uint32, uint32) {
        return (_treasury, _fee, _feeMultiplier);
    }

    function getSplitsFactory() external pure returns (ISplitsFactory) {
        return ISplitsFactory(address(0));
    }

    function getManagement() external pure returns (IManagement) {
        return IManagement(address(0));
    }
}

contract SplitsFactoryWithForkTest is Test {
    SplitsFactory _splitsFactory;
    Registry _registry;
    ISplitMain _splitMain;

    string EVM_RPC_URL = vm.envString("EVM_RPC_URL");
    address _splitMainAddress = 0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE;
    address _payer = makeAddr("_payer");
    address _treasury = makeAddr("_treasury");
    address _deployer = makeAddr("_deployer");
    address _alice = makeAddr("_user_alice");
    address _bob = makeAddr("_user_bob");
    address _charlie = makeAddr("_user_charlie");
    address _distributor = makeAddr("_distributor");

    address _split;

    uint32 _fee = 1_000;
    uint32 _feeMultiplier = 10_000;

    address[] _beneficiaries;

    event SplitCreated(address indexed sender, address indexed split);

    // SplitMain errors
    error Unauthorized(address sender);
    error InvalidSplit__TooFewAccounts(uint256 accountsLength);
    error InvalidSplit__AccountsAndAllocationsMismatch(uint256 accountsLength, uint256 allocationsLength);
    error InvalidSplit__InvalidAllocationsSum(uint32 allocationsSum);
    error InvalidSplit__AccountsOutOfOrder(uint256 index);
    error InvalidSplit__AllocationMustBePositive(uint256 index);
    error InvalidSplit__InvalidDistributorFee(uint32 distributorFee);
    error InvalidSplit__InvalidHash(bytes32 hash);
    error InvalidNewController(address newController);

    function setUp() public {
        uint256 evmFork = vm.createFork(EVM_RPC_URL);
        vm.selectFork(evmFork);

        vm.deal(_payer, 10 ether);

        vm.startPrank(_deployer);
        _registry = new Registry(_treasury, _fee, _feeMultiplier);
        _splitMain = ISplitMain(_splitMainAddress);
        _splitsFactory = new SplitsFactory(_splitMain, _registry);

        vm.stopPrank();
    }

    function setupBeneficiaries() public {
        _beneficiaries.push(_alice);
        _beneficiaries.push(_alice);
        _beneficiaries.push(_bob);
        _beneficiaries.push(_charlie);
    }

    // create

    function create_split_setUp() public {
        setupBeneficiaries();
        vm.startPrank(_deployer);
        _split = _splitsFactory.create(_beneficiaries);

        vm.stopPrank();
    }

    function pay_split_setUp() public {
        create_split_setUp();
        vm.startPrank(_payer);
        payable(_split).transfer(10 ether);
        vm.stopPrank();
    }

    function filter_sort_allocate_setUp() public returns (address[] memory, uint32[] memory) {
        _beneficiaries.push(_treasury);
        (address[] memory filteredBeneficiaries,) = _filterDuplicates(_beneficiaries);

        address[] memory sortedBeneficiaries = _sortAddresses(filteredBeneficiaries);

        uint32[] memory percentAllocations = new uint32[](4);

        for (uint256 i = 0; i < percentAllocations.length; i++) {
            if (sortedBeneficiaries[i] == _treasury) {
                percentAllocations[i] = 100_000;
            } else if (sortedBeneficiaries[i] == _alice) {
                percentAllocations[i] = 450_000;
            } else {
                percentAllocations[i] = 225_000;
            }
        }

        return (sortedBeneficiaries, percentAllocations);
    }

    function test_distributeETH_from_SplitMain() public {
        pay_split_setUp();

        (address[] memory sortedBeneficiaries, uint32[] memory percentAllocations) =
            filter_sort_allocate_setUp();

        uint256 gasBefore = gasleft();

        vm.startPrank(_distributor);
        _splitMain.distributeETH(_split, sortedBeneficiaries, percentAllocations, 10_000, _distributor);
        vm.stopPrank();

        uint256 gasAfter = gasleft();

        uint256 totalGas = gasBefore - gasAfter;

        uint256 balanceAlice = _splitMain.getETHBalance(_alice);
        uint256 balanceBob = _splitMain.getETHBalance(_bob);
        uint256 balanceCharlie = _splitMain.getETHBalance(_charlie);
        uint256 balanceTreasury = _splitMain.getETHBalance(_treasury);
        uint256 distributorBalance = _splitMain.getETHBalance(_distributor);

        assertLt(totalGas, distributorBalance, "Gas used should be less than the distributor's balance");
        // 1% to the distributor => 10 ether * 0.01 = 0.1 ether
        assertEq(distributorBalance, 0.1 ether);
        // 45%  of remaining to Alice => 9.9 ether * 0.45 = 4.455 ether
        assertEq(balanceAlice, 4.455 ether);
        // 22.5% of remaining to Bob => 9.9 ether * 0.225 = 2.2275 ether
        assertEq(balanceBob, 2.2275 ether);
        // 22.5% of remaining to Charlie => 9.9 ether * 0.225 = 2.2275 ether
        assertEq(balanceCharlie, 2.2275 ether);

        // 10% to the treasury => 9.9 ether * 0.1 = 0.99 ether
        assertEq(balanceTreasury, 0.99 ether);
    }

    function withdraw_setUp() public {
        pay_split_setUp();
        (address[] memory sortedBeneficiaries, uint32[] memory percentAllocations) =
            filter_sort_allocate_setUp();

        vm.startPrank(_distributor);
        _splitMain.distributeETH(_split, sortedBeneficiaries, percentAllocations, 10_000, _distributor);
        vm.stopPrank();
    }

    function test_withdraw_from_splitMain() public {
        withdraw_setUp();

        vm.startPrank(_alice);
        _splitMain.withdraw(_alice, 4.455 ether, new ERC20[](0));
        vm.stopPrank();
        vm.startPrank(_bob);
        _splitMain.withdraw(_bob, 2.2275 ether, new ERC20[](0));
        vm.stopPrank();
        vm.startPrank(_charlie);
        _splitMain.withdraw(_charlie, 2.2275 ether, new ERC20[](0));
        vm.stopPrank();
        vm.startPrank(_treasury);
        _splitMain.withdraw(_treasury, 0.99 ether, new ERC20[](0));
        vm.stopPrank();

        uint256 balanceAlice = _alice.balance;
        uint256 balanceBob = _bob.balance;
        uint256 balanceCharlie = _charlie.balance;
        uint256 balanceTreasury = _treasury.balance;

        // The SplitMain contract leaves 1 wei in each account after
        // withdraw is called for gas optimization purposes.
        assertEq(balanceAlice, 4.455 ether - 1);
        assertEq(balanceBob, 2.2275 ether - 1);
        assertEq(balanceCharlie, 2.2275 ether - 1);
        assertEq(balanceTreasury, 0.99 ether - 1);
    }

    function _sortAddresses(address[] memory addresses) internal pure returns (address[] memory) {
        uint256 length = addresses.length;

        for (uint256 i = 0; i < length; i++) {
            for (uint256 j = 0; j < length - i - 1; j++) {
                if (addresses[j] > addresses[j + 1]) {
                    // Swap
                    address temp = addresses[j];
                    addresses[j] = addresses[j + 1];
                    addresses[j + 1] = temp;
                }
            }
        }

        return addresses;
    }

    function _filterDuplicates(address[] memory beneficiaries)
        internal
        pure
        returns (address[] memory, uint256[] memory)
    {
        if (beneficiaries.length <= 1) {
            uint256[] memory oneOccurrence = new uint256[](1);
            oneOccurrence[0] = 1;
            return (beneficiaries, oneOccurrence);
        }
        address[] memory uniqueBeneficiariesTemp = new address[](beneficiaries.length);
        uint256[] memory occurrencesTemp = new uint256[](beneficiaries.length);
        uint256 uniqueCount;

        for (uint256 i = 0; i < beneficiaries.length; i++) {
            bool isUnique = true;
            for (uint256 j = 0; j < uniqueCount; j++) {
                if (beneficiaries[i] == uniqueBeneficiariesTemp[j]) {
                    isUnique = false;
                    occurrencesTemp[j]++;
                    break;
                }
            }
            if (isUnique) {
                uniqueBeneficiariesTemp[uniqueCount] = beneficiaries[i];
                occurrencesTemp[uniqueCount] = 1;
                uniqueCount++;
            }
        }

        address[] memory uniqueBeneficiaries = new address[](uniqueCount);
        uint256[] memory occurrences = new uint256[](uniqueCount);

        for (uint256 i = 0; i < uniqueCount; i++) {
            uniqueBeneficiaries[i] = uniqueBeneficiariesTemp[i];
            occurrences[i] = occurrencesTemp[i];
        }

        return (uniqueBeneficiaries, occurrences);
    }
}
