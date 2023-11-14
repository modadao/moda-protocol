// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";

contract CatalogBeacon is UpgradeableBeacon {
    constructor(address catalogImplementation) UpgradeableBeacon(catalogImplementation, msg.sender) {}
}
