// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IReleases} from "../../src/interfaces/IReleases.sol";

contract ReleasesMock is IReleases {
    bool public isOpen = false;

    function info() external view returns (uint256, bool) {
        uint256 numberOfReleases = 0;
        return (numberOfReleases, isOpen);
    }

    function setIsReleasesOpen() external {
        isOpen = !isOpen;
    }
}
