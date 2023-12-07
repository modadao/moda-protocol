// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ICatalog} from "../Catalog/ICatalog.sol";
import {ISplitsFactory} from "../ISplitsFactory.sol";

interface IReleasesInitialize {
    /**
     * @dev Initializes the contract
     * @param admin - The address that will be given the role of default admin. See {AccessControl}
     * @param releaseAdmins - An array of addresses that will be given the role of release admin
     * @param name_ - The name of the Releases contract
     * @param symbol_ - The symbol of the Releases contract
     * @param catalog - A contract that implements ICatalog
     * @param splitsFactory - A contract that implements ISplitsFactory
     */
    function initialize(
        address admin,
        address[] memory releaseAdmins,
        string memory name_,
        string memory symbol_,
        ICatalog catalog,
        ISplitsFactory splitsFactory
    ) external;
}
