// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {IReleasesFactory} from "./interfaces/Releases/IReleasesFactory.sol";
import {IReleasesInitialize} from "./interfaces/Releases/IReleasesInitialize.sol";
import {IModaRegistry} from "./interfaces/ModaRegistry/IModaRegistry.sol";
import {ICatalog} from "./interfaces/Catalog/ICatalog.sol";
import {IOfficialModaContracts} from "./interfaces/ModaRegistry/IOfficialModaContracts.sol";
import {ISplitsFactory} from "./interfaces/ISplitsFactory.sol";

contract ReleasesFactory is IReleasesFactory {
    address public modaRegistry;
    address public releasesMaster;

    /**
     * @dev Constructor
     * @param modaRegistry_ - The address of the ModaRegistry contract
     * @param releasesMaster_ - The address of the Releases implementation contract
     */
    constructor(address modaRegistry_, address releasesMaster_) {
        modaRegistry = modaRegistry_;
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

        ISplitsFactory splitsFactory = IOfficialModaContracts(modaRegistry).getSplitsFactory();
        IReleasesInitialize(releasesClone).initialize(
            msg.sender, releaseAdmins, name, symbol, catalog, ISplitsFactory(splitsFactory)
        );
        ICatalog(catalog).registerReleasesContract(releasesClone, msg.sender);
        emit ReleasesCreated(msg.sender, releasesClone, name, symbol);
    }
}
