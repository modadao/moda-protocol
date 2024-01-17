// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/SplitsFactory.sol";
import "../src/interfaces/0xSplits/ISplitMain.sol";
import "../src/interfaces/ModaRegistry/IOfficialModaContracts.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";

contract DeploySplitsFactory is Script {
    function run() public {
        uint256 privateKey = vm.envUint("MODA_DEPLOYER_PRIVATE_KEY");
        ISplitMain splitMain = ISplitMain(vm.envAddress("SPLIT_MAIN_ADDRESS"));

        vm.startBroadcast(privateKey);

        IOfficialModaContracts modaRegistry =
            IOfficialModaContracts(DeployedContracts.get("DeployModaRegistry.s.sol", block.chainid));
        new SplitsFactory(splitMain, modaRegistry);

        vm.stopBroadcast();
    }
}
