// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Membership} from "../src/Membership.sol";

contract ModaRegistryTest is Test {
    Membership public membership;
    ModaRegistry public modaRegistry;

    address public user = address(0x1);
    string public catalogName = "Drop";


    function setUp() public {
        membership = new Membership("root");
        modaRegistry = new ModaRegistry();
        membership.addMember(user);
        modaRegistry.registerCatalog(catalogName, address(membership));

    }

    function test_isMember() public {
        console2.log(user);
        bool isMember = modaRegistry.isMember(catalogName, user);
        console2.log(isMember);
        assertTrue(isMember);

    }
}
