const DAO = artifacts.require("MultiSigWalletWithDailyLimit");

module.exports = function (deployer) {
  const daoAddress = deployer.deploy(DAO);
};
