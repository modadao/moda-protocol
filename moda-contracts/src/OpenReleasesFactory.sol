// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {IOpenReleasesFactory} from "./interfaces/Releases/IOpenReleasesFactory.sol";
import {IOpenReleasesInitialize} from "./interfaces/Releases/IOpenReleasesInitialize.sol";
import {IRegistry} from "./interfaces/Registry/IRegistry.sol";
import {ICatalog} from "./interfaces/Catalog/ICatalog.sol";
import {IOfficialContracts} from "./interfaces/Registry/IOfficialContracts.sol";
import {ISplitsFactory} from "./interfaces/ISplitsFactory.sol";

/**
 * @notice OpenReleasesFactory creates Trustless Release contracts and registers them with a Catalog.
 */
contract OpenReleasesFactory is IOpenReleasesFactory {
    IOfficialContracts public registry;
    address public releasesMaster;

    /**
     * @notice Constructor
     * @param registry_ The registry contract that implements IOfficialContracts
     * @param releasesMaster_ The address of the OpenReleases implementation contract
     */
    constructor(IOfficialContracts registry_, address releasesMaster_) {
        registry = registry_;
        releasesMaster = releasesMaster_;
    }

    /**
     * @inheritdoc IOpenReleasesFactory
     */
    function create(string memory name, string memory symbol, ICatalog catalog) external {
        address releasesClone = Clones.clone(releasesMaster);

        ISplitsFactory splitsFactory = registry.getSplitsFactory();
        IOpenReleasesInitialize(releasesClone).initialize(
            msg.sender, name, symbol, catalog, ISplitsFactory(splitsFactory)
        );
        catalog.registerReleasesContract(releasesClone, msg.sender);
        emit OpenReleasesCreated(msg.sender, releasesClone, name, symbol);
    }
}
