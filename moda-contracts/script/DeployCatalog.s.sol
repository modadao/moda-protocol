// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {CatalogFactory} from "../src/CatalogFactory.sol";
import {DeployedContracts} from "./utils/DeployedContracts.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";

contract DeployCatalog is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(privateKey);

        string memory name = vm.envString("CATALOG_NAME");

        /// @dev This contract has a few transaction so the CatalogFactory address is not in the first index
        CatalogFactory catalogFactory =
            CatalogFactory(DeployedContracts.getAt("DeployCatalogFactory.s.sol", block.chainid, 3));
        IMembership membership =
            IMembership(DeployedContracts.get("DeployMembership.s.sol", block.chainid));

        address catalog = catalogFactory.create(name, membership);

        console.logString("Your Catalog was deployed to:");
        console.logAddress(catalog);

        vm.stopBroadcast();
    }
}
