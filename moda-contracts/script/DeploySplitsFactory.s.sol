// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/SplitsFactory.sol";
import "../src/interfaces/0xSplits/ISplitMain.sol";
import "../src/interfaces/Registry/IOfficialContracts.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";

contract DeploySplitsFactory is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        ISplitMain splitMain = ISplitMain(vm.envAddress("SPLIT_MAIN_ADDRESS"));

        vm.startBroadcast(privateKey);

        IOfficialContracts registry =
            IOfficialContracts(DeployedContracts.get("DeployRegistry.s.sol", block.chainid));
        new SplitsFactory(splitMain, registry);

        vm.stopBroadcast();
    }
}
