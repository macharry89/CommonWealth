const MIM = artifacts.require("MagicInternetMoney");

module.exports = function (deployer) {
  deployer.deploy(MIM);
};
