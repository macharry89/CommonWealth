const DAO = artifacts.require("MultiSigWalletWithDailyLimit");

module.exports = function (deployer) {
  const ownerAddress = ['0xCCFF5aA7cfF282E33cA47CE89CA783C0B3dc963a', '0xBCe52BC91048F5E83610e79d6622F00e0b971843'];
  deployer.deploy(DAO, ownerAddress, 2, 3000);
};
