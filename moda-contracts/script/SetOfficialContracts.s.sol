// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/Registry.sol";
import {IManagement} from "../src/interfaces/IManagement.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";
import {IOfficialContracts} from "../src/interfaces/Registry/IOfficialContracts.sol";

contract SetOfficialContracts is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");

        vm.startBroadcast(privateKey);

        Registry registry = Registry(DeployedContracts.get("DeployRegistry.s.sol", block.chainid));
        IManagement management =
            IManagement(DeployedContracts.get("DeployManagement.s.sol", block.chainid));
        ISplitsFactory splitsFactory =
            ISplitsFactory(DeployedContracts.getAt("DeploySplitsFactory.s.sol", block.chainid, 1));

        registry.setManagement(management);
        registry.setSplitsFactory(splitsFactory);

        vm.stopBroadcast();
    }
}
