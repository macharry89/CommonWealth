const StakingWarmup = artifacts.require("StakingWarmup");

module.exports = function (deployer) {
  const stakingAddress = '0x7D71beaa180491F85CD37d87363D4a0DF8F88b20';
  const zBlockAddress = '0x55e0196DDA713BD5bD34C6B986adabE011cB8138';
  deployer.deploy(StakingWarmup, stakingAddress, zBlockAddress);
};
