const TimeERC20 = artifacts.require("TimeERC20Token");
// const Staking = artifacts.require("Staking");
// const StakingHelper = artifacts.require("StakingHelper");
// const StandardBondingCalculator = artifacts.require("StandardBondingCalculator");
// const Treasury = artifacts.require("Treasury");
// const WonderZapIn = artifacts.require("WonderZapIn");
// const wMEMO = artifacts.require("wMEMO");

module.exports = function (deployer) {
  const timeERC20Token = deployer.deploy(TimeERC20);
  // const stakingAddress = deployer.deploy(Staking, timeERC20Token.address, memoriesERC20.address, 28800, 440, 1641294975);
  // const stakingHelper = deployer.deploy(StakingHelper, staking.address, timeERC20TokenAddress.address);
  // const standardBondingCalculator = deployer.deploy(StandardBondingCalculator, timeERC20TokenAddress.address);
  // const treasury = deployer.deploy(Treasury);
  // const wonderZapIn = deployer.deploy(WonderZapIn, daoAddress.address);
  // const wMEMO_ = deployer.deploy(wMEMO, memoriesERC20.address);
};
