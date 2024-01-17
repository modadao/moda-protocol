// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Vm} from "forge-std/Vm.sol";
import {console2} from "forge-std/Script.sol";

library DeployedContracts {
    Vm internal constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function get(string calldata deployFileName, uint256 chainId) external returns (address) {
        string memory filePath = string(
            abi.encodePacked(
                "./broadcast/", deployFileName, "/", Strings.toString(chainId), "/run-latest.json"
            )
        );
        string memory jsonContent = vm.readFile(filePath);
        string memory jsonPath = "$.transactions[0].contractAddress";
        bytes memory profileBytes = vm.parseJson(jsonContent, jsonPath);

        return abi.decode(profileBytes, (address));
    }
}
