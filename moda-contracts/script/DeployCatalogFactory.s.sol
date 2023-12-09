// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/CatalogFactory.sol";
import "../src/ModaRegistry.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";

contract DeployCatalogFactory is Script {
    function run() public {
        uint256 privateKey = vm.envUint("MODA_DEPLOYER_PRIVATE_KEY");
        address modaDeployer = vm.addr(privateKey);
        vm.startBroadcast(privateKey);

        ModaRegistry modaRegistry = ModaRegistry(DeployedContracts.getModaRegistryAddress(block.chainid));
        IBeacon beacon = IBeacon(Upgrades.deployBeacon("Catalog.sol", modaDeployer));
        new CatalogFactory(modaRegistry, address(beacon));

        vm.stopBroadcast();
    }
}
