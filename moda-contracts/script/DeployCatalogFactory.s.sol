// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/CatalogFactory.sol";
import "../src/Registry.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";

contract DeployCatalogFactory is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address deployer = vm.addr(privateKey);
        vm.startBroadcast(privateKey);

        Registry registry = Registry(DeployedContracts.get("DeployRegistry.s.sol", block.chainid));
        IBeacon beacon = IBeacon(Upgrades.deployBeacon("Catalog.sol", deployer));
        new CatalogFactory(registry, address(beacon));

        vm.stopBroadcast();
    }
}
