// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Vm} from "forge-std/Vm.sol";
import {console2} from "forge-std/Script.sol";

library DeployedContracts {
    Vm internal constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function getModaRegistryAddress(uint256 chainId) public view returns (address) {
        string memory filePath = string(
            abi.encodePacked(
                "./broadcast/DeployModaRegistry.s.sol/", Strings.toString(chainId), "/run-latest.json"
            )
        );
        string memory jsonContent = vm.readFile(filePath);
        string memory jsonPath = "$.transactions[0].contractAddress";
        bytes memory modaRegistryBytes = vm.parseJson(jsonContent, jsonPath);
        address modaRegistry = abi.decode(modaRegistryBytes, (address));
        return modaRegistry;
    }

    function getManagementAddress(uint256 chainId) public view returns (address) {
        string memory filePath = string(
            abi.encodePacked(
                "./broadcast/DeployManagement.s.sol/", Strings.toString(chainId), "/run-latest.json"
            )
        );
        string memory jsonContent = vm.readFile(filePath);
        string memory jsonPath = "$.transactions[0].contractAddress";
        bytes memory managementBytes = vm.parseJson(jsonContent, jsonPath);
        address management = abi.decode(managementBytes, (address));
        return management;
    }

    function getSplitsFactoryAddress(uint256 chainId) public view returns (address) {
        string memory filePath = string(
            abi.encodePacked(
                "./broadcast/DeploySplitsFactory.s.sol/", Strings.toString(chainId), "/run-latest.json"
            )
        );
        string memory jsonContent = vm.readFile(filePath);
        string memory jsonPath = "$.transactions[0].contractAddress";
        bytes memory splitsFactoryBytes = vm.parseJson(jsonContent, jsonPath);
        address splitsFactory = abi.decode(splitsFactoryBytes, (address));
        return splitsFactory;
    }

    function getCatalogFactoryAddress(uint256 chainId) public view returns (address) {
        string memory filePath = string(
            abi.encodePacked(
                "./broadcast/DeployCatalogFactory.s.sol/", Strings.toString(chainId), "/run-latest.json"
            )
        );
        string memory jsonContent = vm.readFile(filePath);
        string memory jsonPath = "$.transactions[0].contractAddress";
        bytes memory catalogFactoryBytes = vm.parseJson(jsonContent, jsonPath);
        address catalogFactory = abi.decode(catalogFactoryBytes, (address));
        return catalogFactory;
    }
}
