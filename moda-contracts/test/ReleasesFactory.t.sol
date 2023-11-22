// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/ReleasesFactory.sol";
import "../src/Releases.sol";
import "../src/ModaRegistry.sol";
import "../src/Catalog.sol";

contract ReleasesFactoryTest is Test {
    ModaRegistry public modaRegistry;
    Releases public releasesMaster;
    ReleasesFactory public releasesFactory;
    Catalog public catalog;

    address public splitsFactory = address(0x3);
    string name = "name";
    string symbol = "symbol";

    address public releasesOwner = address(0x5);
    address public releaseAdmin = address(0x6);

    function setUp() public {
        modaRegistry = new ModaRegistry();
        catalog = new Catalog();
        catalog.initialize("name", "symbol", address(modaRegistry));
        releasesMaster = new Releases(true);
        releasesFactory =
            new ReleasesFactory(address(modaRegistry), address(releasesMaster), splitsFactory);
        modaRegistry.grantRole(keccak256("RELEASES_REGISTRAR_ROLE"), address(releasesFactory));
    }

    function test_constructor() public {
        assertEq(releasesFactory.modaRegistry(), address(modaRegistry));
        assertEq(releasesFactory.releasesMaster(), address(releasesMaster));
        assertEq(releasesFactory.splitsFactory(), splitsFactory);
    }

    function test_create() public {
        address[] memory releaseAdmins = new address[](1);
        releaseAdmins[0] = releaseAdmin;
        releasesFactory.create(releaseAdmins, name, symbol, address(catalog));
        address releases = releasesFactory.releases(0);

        assertEq(Releases(releases).name(), name);
        assertEq(Releases(releases).symbol(), symbol);
    }
}
