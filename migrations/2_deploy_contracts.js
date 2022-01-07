const AnyswapV5ERC20 = artifacts.require("AnyswapV5ERC20");

module.exports = function (deployer) {
  const underlying = '0x0000000000000000000000000000000000000000';
  const anyswapV4Router = '0xc834A8223a439B3DF2dBA1Ab6751280195EDDebE';
  deployer.deploy(AnyswapV5ERC20, 'Magic Internet Money', 'MIM', 18, underlying, anyswapV4Router);
};
