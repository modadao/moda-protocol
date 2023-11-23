// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDCMock is ERC20("USDC", "USDC") {
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
