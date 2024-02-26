// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {IReleasesFactory} from "./interfaces/Releases/IReleasesFactory.sol";
import {IReleasesInitialize} from "./interfaces/Releases/IReleasesInitialize.sol";
import {IRegistry} from "./interfaces/Registry/IRegistry.sol";
import {ICatalog} from "./interfaces/Catalog/ICatalog.sol";
import {IOfficialContracts} from "./interfaces/Registry/IOfficialContracts.sol";
import {ISplitsFactory} from "./interfaces/ISplitsFactory.sol";

/**
 * @notice ReleasesFactory creates Trustless Release contracts and registers them with a Catalog.
 */
contract ReleasesFactory is IReleasesFactory {
    IOfficialContracts public registry;
    address public releasesMaster;

    /**
     * @notice Constructor
     * @param registry_ The registry contract that implements IOfficialContracts
     * @param releasesMaster_ The address of the Releases implementation contract
     */
    constructor(IOfficialContracts registry_, address releasesMaster_) {
        registry = registry_;
        releasesMaster = releasesMaster_;
    }

    /**
     * @inheritdoc IReleasesFactory
     */
    function create(
        address[] memory releaseAdmins,
        string memory name,
        string memory symbol,
        ICatalog catalog
    ) external {
        address releasesClone = Clones.clone(releasesMaster);

        ISplitsFactory splitsFactory = registry.getSplitsFactory();
        IReleasesInitialize(releasesClone).initialize(
            msg.sender, releaseAdmins, name, symbol, catalog, ISplitsFactory(splitsFactory)
        );
        ICatalog(catalog).registerReleasesContract(releasesClone, msg.sender);
        emit ReleasesCreated(msg.sender, releasesClone, name, symbol);
    }
}
