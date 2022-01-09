const RGGERC20 = artifacts.require("RGGERC20");

module.exports = function (deployer) {
  deployer.deploy(RGGERC20, '1000000000000000000000000000');
};
