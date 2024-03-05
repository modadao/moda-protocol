// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script} from "forge-std/Script.sol";
import {ReleasesFactory} from "../src/ReleasesFactory.sol";
import {Registry} from "../src/Registry.sol";
import {Releases} from "../src/Releases.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";

contract DeployReleasesFactory is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(privateKey);

        Registry registry = Registry(DeployedContracts.get("DeployRegistry.s.sol", block.chainid));
        Releases releases = new Releases();
        ReleasesFactory factory = new ReleasesFactory(registry, address(releases));

        registry.grantRole(registry.RELEASES_REGISTRAR_ROLE(), address(factory));

        vm.stopBroadcast();
    }
}
