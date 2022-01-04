const Treasury = artifacts.require("TimeTreasury");
// const WonderZapIn = artifacts.require("WonderZapIn");
// const wMEMO = artifacts.require("wMEMO");

module.exports = function (deployer) {
  const timeERC20TokenAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const memoriesERC20Address = '0x27483bd899EfF7D95d0ECb14a167eFcbEe919925';
  const treasury = deployer.deploy(Treasury, timeERC20TokenAddress);
  // const wonderZapIn = deployer.deploy(WonderZapIn, daoAddress.address);
  // const wMEMO_ = deployer.deploy(wMEMO, memoriesERC20.address);
};
