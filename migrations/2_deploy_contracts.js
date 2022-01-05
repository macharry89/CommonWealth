const Treasury = artifacts.require("TimeTreasury");
// const WonderZapIn = artifacts.require("WonderZapIn");
// const wMEMO = artifacts.require("wMEMO");

module.exports = function (deployer) {
  const timeERC20TokenAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const MIMAddress = '0xb701fCdF657CDa7256bF1ecFf340cae590Fc1286';
  const treasury = deployer.deploy(Treasury, timeERC20TokenAddress, MIMAddress, 0, 10);
  // const wonderZapIn = deployer.deploy(WonderZapIn, daoAddress.address);
  // const wMEMO_ = deployer.deploy(wMEMO, memoriesERC20.address);
};
