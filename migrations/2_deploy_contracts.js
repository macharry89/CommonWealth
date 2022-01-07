const StandardBondingCalculator = artifacts.require("BlockBondingCalculator");
// const Treasury = artifacts.require("Treasury");
// const WonderZapIn = artifacts.require("WonderZapIn");
// const wMEMO = artifacts.require("wMEMO");

module.exports = function (deployer) {
  // const timeERC20TokenAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const standardBondingCalculator = deployer.deploy(StandardBondingCalculator, blockAddress);
  // const treasury = deployer.deploy(Treasury);
  // const wonderZapIn = deployer.deploy(WonderZapIn, daoAddress.address);
  // const wMEMO_ = deployer.deploy(wMEMO, memoriesERC20.address);
};
