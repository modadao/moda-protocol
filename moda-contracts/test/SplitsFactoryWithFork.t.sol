// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {SplitsFactory} from "../src/SplitsFactory.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";
import {IManagement} from "../src/interfaces/IManagement.sol";
import {ISplitMain} from "../src/interfaces/0xSplits/ISplitMain.sol";
import {IOfficialModaContracts} from "../src/interfaces/ModaRegistry/IOfficialModaContracts.sol";
import {SplitMainMock} from "./mocks/SplitMainMock.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "forge-std/Test.sol";
import "forge-std/console2.sol";

contract ModaRegistry is IOfficialModaContracts {
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
    ModaRegistry _modaRegistry;
    ISplitMain _splitMain;

    string EVM_RPC_URL = vm.envString("EVM_RPC_URL");
    address _splitMainAddress = 0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE;
    address _payer = makeAddr("MODA_payer");
    address _modaTreasury = makeAddr("MODA_treasury");
    address _deployer = makeAddr("MODA_deployer");
    address _alice = makeAddr("MODA_user_alice");
    address _bob = makeAddr("MODA_user_bob");
    address _distributor = makeAddr("MODA_distributor");

    address _split;

    uint32 _modaFee = 1_000;
    uint32 _modaFeeMultiplier = 10_000;

    address[] _beneficiaries;

    event SplitCreated(address indexed sender, address indexed split);

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

    function setUp() public {
        uint256 evmFork = vm.createFork(EVM_RPC_URL);
        vm.selectFork(evmFork);

        vm.deal(_payer, 10 ether);

        vm.startPrank(_deployer);
        _modaRegistry = new ModaRegistry(_modaTreasury, _modaFee, _modaFeeMultiplier);
        _splitMain = ISplitMain(_splitMainAddress);
        _splitsFactory = new SplitsFactory(_splitMain, _modaRegistry);
        vm.stopPrank();
    }

    function setupBeneficiaries() public {
        _beneficiaries.push(_alice);
        _beneficiaries.push(_bob);
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

    function allocations_setUp() public returns (uint32[] memory) {
        _beneficiaries.push(_modaTreasury);

        _beneficiaries = _sortAddresses(_beneficiaries);

        uint32[] memory percentAllocations = new uint32[](3);

        for (uint256 i = 0; i < _beneficiaries.length; i++) {
            if (_beneficiaries[i] == _modaTreasury) {
                percentAllocations[i] = 100_000;
            } else {
                percentAllocations[i] = 450_000;
            }
        }

        return percentAllocations;
    }

    function test_distributeETH_from_SplitMain() public {
        pay_split_setUp();

        uint32[] memory percentAllocations = allocations_setUp();
        uint256 gasBefore = gasleft();

        vm.startPrank(_distributor);
        _splitMain.distributeETH(_split, _beneficiaries, percentAllocations, 10_000, _distributor);
        vm.stopPrank();

        uint256 gasAfter = gasleft();

        uint256 totalGas = gasBefore - gasAfter;

        uint256 balanceAlice = _splitMain.getETHBalance(_alice);
        uint256 balanceBob = _splitMain.getETHBalance(_bob);
        uint256 balanceTreasury = _splitMain.getETHBalance(_modaTreasury);
        uint256 distributorBalance = _splitMain.getETHBalance(_distributor);

        assertLt(totalGas, distributorBalance, "Gas used should be less than the distributor's balance");
        // 1% to the distributor => 10 ether * 0.01 = 0.1 ether
        assertEq(distributorBalance, 0.1 ether);
        // 45% each to Alice and Bob => 9.9 ether * 0.45 = 4.455 ether
        assertEq(balanceAlice, 4.455 ether);
        assertEq(balanceBob, 4.455 ether);
        // 10% to the treasury => 9.9 ether * 0.1 = 0.99 ether
        assertEq(balanceTreasury, 0.99 ether);
    }

    function withdraw_setUp() public {
        pay_split_setUp();
        uint32[] memory percentAllocations = allocations_setUp();

        vm.startPrank(_distributor);
        _splitMain.distributeETH(_split, _beneficiaries, percentAllocations, 10_000, _distributor);
        vm.stopPrank();
    }

    function test_withdraw_from_splitMain() public {
        withdraw_setUp();

        vm.startPrank(_alice);
        _splitMain.withdraw(_alice, 4.455 ether, new ERC20[](0));
        vm.stopPrank();
        vm.startPrank(_bob);
        _splitMain.withdraw(_bob, 4.455 ether, new ERC20[](0));
        vm.stopPrank();
        vm.startPrank(_modaTreasury);
        _splitMain.withdraw(_modaTreasury, 0.99 ether, new ERC20[](0));
        vm.stopPrank();

        uint256 balanceAlice = _alice.balance;
        uint256 balanceBob = _bob.balance;
        uint256 balanceTreasury = _modaTreasury.balance;

        // The SplitMain contract leaves 1 wei in each account after
        // withdraw is called for gas optimization purposes.
        assertEq(balanceAlice, 4.455 ether - 1);
        assertEq(balanceBob, 4.455 ether - 1);
        assertEq(balanceTreasury, 0.99 ether - 1);
    }
}
