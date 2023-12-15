// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import "../src/ModaRegistry.sol";

contract DeployModaRegistry is Script {
    function run() public {
        uint256 privateKey = vm.envUint("MODA_DEPLOYER_PRIVATE_KEY");
        uint256 treasuryFee = vm.envUint("MODA_TREASURY_FEE");
        address payable treasury = payable(vm.envAddress("MODA_TREASURY_ADDRESS"));
        vm.startBroadcast(privateKey);
        new ModaRegistry(treasury, uint32(treasuryFee));
        vm.stopBroadcast();
    }
}
