const AnyswapV4Router = artifacts.require("AnyswapV4Router");

module.exports = function (deployer) {
  const uniswapFactory = '0x20cc2819DdfFc4D64261D749AE36a5b4c9B533bA';
  const _wNATIVE = '0xc7224fC34B88c3c3a8969bC7C2DB4641a99e5d3d';
  const mpc = '0xe1f7515060ab4C4170F0849329f36C73d4b40808';
  deployer.deploy(AnyswapV4Router, uniswapFactory, _wNATIVE, mpc);
};
