const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function (deployer) {
  const feeToSetter = '0xc7224fC34B88c3c3a8969bC7C2DB4641a99e5d3d';
  deployer.deploy(UniswapV2Factory, feeToSetter);
};
