// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IReleases} from "./IReleases.sol";
import {IBurnable} from "./IBurnable.sol";

/**
 * @title IOpenReleases
 * @dev Interface for IOpenReleases, extends IReleases
 */
interface IOpenReleases is IReleases, IBurnable {}
