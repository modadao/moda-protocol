// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {IReleasesFactory} from "./interfaces/Releases/IReleasesFactory.sol";
import {IReleases} from "./interfaces/Releases/IReleases.sol";
import {IModaRegistry} from "./interfaces/IModaRegistry.sol";
import {IReleasesRegistration} from "./interfaces/Releases/IReleasesRegistration.sol";

contract ReleasesFactory is IReleasesFactory {
    address public modaRegistry;
    address public releasesMaster;
    address public splitsFactory;

    address[] public releases;

    constructor(address modaRegistry_, address releasesMaster_, address splitsFactory_) {
        modaRegistry = modaRegistry_;
        releasesMaster = releasesMaster_;
        splitsFactory = splitsFactory_;
    }

    function create(
        address[] memory releaseAdmins,
        string memory name,
        string memory symbol,
        address catalog
    ) external {
        address releasesClone = Clones.clone(releasesMaster);
        releases.push(releasesClone);
        IReleases(releasesClone).initialize(
            msg.sender, releaseAdmins, name, symbol, catalog, splitsFactory
        );
        IReleasesRegistration(catalog).registerReleasesContract(releasesClone, msg.sender);
        emit ReleasesCreated(msg.sender, releasesClone, name, symbol);
    }
}
