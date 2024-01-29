// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/Registry.sol";

contract DeployRegistry is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        uint256 treasuryFee = vm.envUint("TREASURY_FEE");
        address payable treasury = payable(vm.envAddress("TREASURY_ADDRESS"));
        vm.startBroadcast(privateKey);
        new Registry(treasury, uint32(treasuryFee));
        vm.stopBroadcast();
    }
}
