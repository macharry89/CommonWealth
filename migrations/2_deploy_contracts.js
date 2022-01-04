const StandardBondingCalculator = artifacts.require("TimeBondingCalculator");
// const Treasury = artifacts.require("Treasury");
// const WonderZapIn = artifacts.require("WonderZapIn");
// const wMEMO = artifacts.require("wMEMO");

module.exports = function (deployer) {
  const timeERC20TokenAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const standardBondingCalculator = deployer.deploy(StandardBondingCalculator, timeERC20TokenAddress);
  // const treasury = deployer.deploy(Treasury);
  // const wonderZapIn = deployer.deploy(WonderZapIn, daoAddress.address);
  // const wMEMO_ = deployer.deploy(wMEMO, memoriesERC20.address);
};
