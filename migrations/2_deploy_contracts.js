const AnyswapV5ERC20 = artifacts.require("AnyswapV5ERC20");

module.exports = function (deployer) {
  deployer.deploy(AnyswapV5ERC20, 'Magic Internet Money', 'MIM', 18, '0x0000000000000000000000000000000000000000', );
};
