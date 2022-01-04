const Staking = artifacts.require("TimeStaking");
// const StakingHelper = artifacts.require("StakingHelper");
// const StandardBondingCalculator = artifacts.require("StandardBondingCalculator");
// const Treasury = artifacts.require("Treasury");
// const WonderZapIn = artifacts.require("WonderZapIn");
// const wMEMO = artifacts.require("wMEMO");

module.exports = function (deployer) {
  const timeERC20TokenAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const memoriesERC20Address = '0x27483bd899EfF7D95d0ECb14a167eFcbEe919925';
  const stakingAddress = deployer.deploy(Staking, timeERC20TokenAddress, memoriesERC20Address, 28800, 440, 1641333731);
  // const stakingHelper = deployer.deploy(StakingHelper, staking.address, timeERC20TokenAddress.address);
  // const standardBondingCalculator = deployer.deploy(StandardBondingCalculator, timeERC20TokenAddress.address);
  // const treasury = deployer.deploy(Treasury);
  // const wonderZapIn = deployer.deploy(WonderZapIn, daoAddress.address);
  // const wMEMO_ = deployer.deploy(wMEMO, memoriesERC20.address);
};
