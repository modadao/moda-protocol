// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "forge-std/Test.sol";
import {Wallets} from "./Wallets.sol";

contract TestUtils is Test {
    Wallets internal _w = new Wallets();
    address internal _treasury = address(0x123);
}
