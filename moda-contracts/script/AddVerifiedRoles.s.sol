// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {IAccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/Script.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract AddVerifiedRoles is Script {
    function run() public {
        uint256 privateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address catalog = vm.envAddress("REGISTRY");

        vm.startBroadcast(privateKey);

        string memory content = vm.readFile("./script/utils/add_verified_role/addresses.json");
        uint256 length = uint256(vm.parseJsonInt(content, "$.length"));

        for (uint256 i = 0; i < length; i++) {
            string memory addressPath =
                string(abi.encodePacked("$.addresses[", Strings.toString(i), "]"));
            bytes memory addressBytes = vm.parseJson(content, addressPath);
            address addressToVerify = abi.decode(addressBytes, (address));
            IAccessControl(catalog).grantRole(keccak256("AUTO_VERIFIED_ROLE"), addressToVerify);
            console2.log("address", addressToVerify, "has been granted the AUTO_VERIFIED_ROLE");
        }
    }
}
