// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IReleases} from "./IReleases.sol";
import {IBurnable} from "./IBurnable.sol";

/**
 * @notice IOpenReleases is "open" for anyone to release a drop. It contains `IBurnable`
 * functionality for privileged accounts to remove malicious tokens.
 */
interface IOpenReleases is IReleases, IBurnable {}
