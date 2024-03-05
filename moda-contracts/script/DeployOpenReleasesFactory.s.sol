// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script} from "forge-std/Script.sol";
import {OpenReleasesFactory} from "../src/OpenReleasesFactory.sol";
import {Registry} from "../src/Registry.sol";
import {OpenReleases} from "../src/OpenReleases.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";

contract DeployOpenReleasesFactory is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(privateKey);

        Registry registry = Registry(DeployedContracts.get("DeployRegistry.s.sol", block.chainid));
        OpenReleases openReleases = new OpenReleases();
        OpenReleasesFactory factory = new OpenReleasesFactory(registry, address(openReleases));

        registry.grantRole(registry.RELEASES_REGISTRAR_ROLE(), address(factory));

        vm.stopBroadcast();
    }
}
