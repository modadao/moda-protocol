// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/ModaRegistry.sol";
import {IManagement} from "../src/interfaces/IManagement.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";
import {IOfficialModaContracts} from "../src/interfaces/ModaRegistry/IOfficialModaContracts.sol";

contract SetOfficialModaContracts is Script {
    function run() public {
        uint256 privateKey = vm.envUint("MODA_DEPLOYER_PRIVATE_KEY");

        vm.startBroadcast(privateKey);

        address modaRegistry = DeployedContracts.getModaRegistryAddress(block.chainid);
        IManagement management = IManagement(DeployedContracts.getManagementAddress(block.chainid));
        ISplitsFactory splitsFactory =
            ISplitsFactory(DeployedContracts.getSplitsFactoryAddress(block.chainid));

        ModaRegistry(modaRegistry).setManagement(management);
        ModaRegistry(modaRegistry).setSplitsFactory(splitsFactory);

        vm.stopBroadcast();
    }
}
