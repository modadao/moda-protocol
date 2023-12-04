// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ITrackRegistration} from "./ITrackRegistration.sol";
import {IReleaseRegistration} from "../Releases/IReleaseRegistration.sol";
import {IReleasesApproval} from "../Releases/IReleasesApproval.sol";
import {IReleasesRegistration} from "../Releases/IReleasesRegistration.sol";
import {IReleases} from "../Releases/IReleases.sol";

/// @title ICatalog - A contract deployed by an organization where artists and labels can register music.
interface ICatalog is
    ITrackRegistration,
    IReleasesRegistration,
    IReleaseRegistration,
    IReleasesApproval
{}
