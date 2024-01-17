// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/Profile.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";

contract DeployProfile is Script {
    function run() public {
        uint256 privateKey = vm.envUint("MODA_DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(privateKey);

        new Profile("Profile", "PROF");

        vm.stopBroadcast();
    }
}
