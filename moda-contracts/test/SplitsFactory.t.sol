// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {SplitsFactory} from "../src/SplitsFactory.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";
import {IManagement} from "../src/interfaces/IManagement.sol";
import {ISplitMain} from "../src/interfaces/0xSplits/ISplitMain.sol";
import {IOfficialContracts} from "../src/interfaces/Registry/IOfficialContracts.sol";
import {SplitMainMock} from "./mocks/SplitMainMock.sol";
import {TestUtils} from "./utils/TestUtils.sol";

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

contract SplitsFactoryTest is TestUtils {
    SplitsFactory _splitsFactory;
    Registry _registry;
    SplitMainMock _splitMain;

    uint32 _Fee = 1_000;
    uint32 _FeeMultiplier = 10_000;

    address[] _beneficiaries;

    event SplitCreated(address indexed sender, address indexed split);

    function setUp() public {
        _registry = new Registry(_treasury, _Fee, _FeeMultiplier);
        _splitMain = new SplitMainMock();
        _splitsFactory = new SplitsFactory(_splitMain, _registry);
    }

    function setupBeneficiaries() public {
        _beneficiaries.push(_w.alice());
        _beneficiaries.push(_w.bob());
    }

    // constructor

    function test_constructor_sets_sender_as_owner() public {
        vm.startPrank(_w.alice());
        SplitsFactory sf = new SplitsFactory(_splitMain, _registry);
        assertEq(sf.owner(), _w.alice());
        vm.stopPrank();
    }

    // create

    function test_create_adds_all_beneficiaries() public {
        setupBeneficiaries();

        _splitsFactory.create(_beneficiaries);

        uint32 expectedUserShare = 450_000;
        uint32 expectedFacilitatorShare = 100_000;

        assertEq(_splitMain.beneficiariesLength(), _beneficiaries.length + 1);
        assertEq(_splitMain.allocationFor(_w.alice()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.bob()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_treasury), expectedFacilitatorShare);
    }

    function test_create_adds_correct_shares_if_treasury_is_passed_in_as_a_beneficiary() public {
        setupBeneficiaries();
        _beneficiaries.push(_treasury);

        _splitsFactory.create(_beneficiaries);

        uint32 expectedUserShare = 300_000;
        uint32 expectedFacilitatorShare = 100_000 + expectedUserShare;

        assertEq(_splitMain.beneficiariesLength(), _beneficiaries.length + 1);
        assertEq(_splitMain.allocationFor(_w.alice()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.bob()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_treasury), expectedFacilitatorShare);
    }

    function test_create_adds_dust_allocations_to_treasury() public {
        setupBeneficiaries();
        _beneficiaries.push(_w.carl());
        _beneficiaries.push(_w.dave());
        _beneficiaries.push(_w.eric());
        _beneficiaries.push(_w.frank());
        _beneficiaries.push(_w.gary());

        _splitsFactory.create(_beneficiaries);

        uint32 expectedUserShare = uint32(900_000) / uint32(7); // 128,571.4285714286 -> 128,571
        uint32 expectedFacilitatorShare = 100_003;

        assertEq(_splitMain.beneficiariesLength(), _beneficiaries.length + 1);
        assertEq(_splitMain.allocationFor(_treasury), expectedFacilitatorShare);
        assertEq(_splitMain.allocationFor(_w.alice()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.bob()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.carl()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.dave()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.eric()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.frank()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_w.gary()), expectedUserShare);
    }

    function test_create_sets_one_percent_distributor_fee() public {
        setupBeneficiaries();

        _splitsFactory.create(_beneficiaries);
        uint32 onePercent = 10_000;

        assertEq(_splitMain.distributorFee(), onePercent);
    }

    function test_create_gives_more_shares_to_duplicate_accounts() public {
        _beneficiaries.push(_w.alice());
        _beneficiaries.push(_w.alice());
        _beneficiaries.push(_w.bob());
        _beneficiaries.push(_w.alice());

        _splitsFactory.create(_beneficiaries);
        uint32 expectedUserShare = 900_000 / uint32(_beneficiaries.length);
        uint32 expectedSharesForAlice = expectedUserShare * 3;
        uint32 expectedFacilitatorShare = 100_000;

        assertEq(_splitMain.allocationFor(_w.alice()), expectedSharesForAlice);
        assertEq(_splitMain.allocationFor(_w.bob()), expectedUserShare);
        assertEq(_splitMain.allocationFor(_treasury), expectedFacilitatorShare);
    }

    function test_create_emits_SplitCreated() public {
        vm.startPrank(_w.alice());

        setupBeneficiaries();

        vm.expectEmit(true, true, false, false);
        emit SplitCreated(_w.alice(), _splitMain.mockSplitAddress());

        _splitsFactory.create(_beneficiaries);

        vm.stopPrank();
    }

    function test_create_sorts_unordered_accounts() public {
        address first = address(0x1);
        address middle = address(0x2);
        address last = address(0x3);

        _beneficiaries.push(last);
        _beneficiaries.push(middle);
        _beneficiaries.push(first);

        _splitsFactory.create(_beneficiaries);

        assertEq(_splitMain.beneficiaries(0), first);
        assertEq(_splitMain.beneficiaries(1), middle);
        assertEq(_splitMain.beneficiaries(2), last);
    }

    function test_create_returns_the_split_address() public {
        setupBeneficiaries();

        address split = _splitsFactory.create(_beneficiaries);

        assertEq(split, _splitMain.mockSplitAddress());
    }

    // PERCENTAGE_SCALE

    function test_PERCENTAGE_SCALE() public {
        uint32 scale = _splitsFactory.PERCENTAGE_SCALE();

        assertEq(scale, uint32(1_000_000));
    }
}
