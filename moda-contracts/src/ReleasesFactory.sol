// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {IReleasesFactory} from "./interfaces/Releases/IReleasesFactory.sol";
import {IReleases} from "./interfaces/Releases/IReleases.sol";
import {IModaRegistry} from "./interfaces/ModaRegistry/IModaRegistry.sol";
import {ISplitsFactory} from "./interfaces/ISplitsFactory.sol";
import {IOfficialModaContracts} from "./interfaces/ModaRegistry/IOfficialModaContracts.sol";
import {IReleasesRegistration} from "./interfaces/Releases/IReleasesRegistration.sol";

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
        address catalog
    ) external {
        address releasesClone = Clones.clone(releasesMaster);
        ISplitsFactory splitsFactory = IOfficialModaContracts(modaRegistry).getSplitsFactory();
        IReleases(releasesClone).initialize(
            msg.sender, releaseAdmins, name, symbol, catalog, splitsFactory
        );
        IReleasesRegistration(catalog).registerReleasesContract(releasesClone, msg.sender);
        emit ReleasesCreated(msg.sender, releasesClone, name, symbol);
    }
}
