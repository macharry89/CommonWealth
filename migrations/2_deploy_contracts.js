const DAO = artifacts.require("MultiSigWalletWithDailyLimit");

module.exports = function (deployer) {
  const ownerAddress = ['0x87cD7b8176CE030B47134688BcA6DD53cc85fF40', '0x5c6A1928ACfcDED5486b9E80773f3D458e4881C2'];
  deployer.deploy(DAO, ownerAddress, 2, 10000000);
};
