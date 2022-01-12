const StakingWarmup = artifacts.require("BlockStakingWarmup");
// const Distributor = artifacts.require("Distributor");

module.exports = function (deployer) {
  const stakingAddress = '0x7D71beaa180491F85CD37d87363D4a0DF8F88b20';
  const zBlockAddress = '0x55e0196DDA713BD5bD34C6B986adabE011cB8138';
  deployer.deploy(StakingWarmup, stakingAddress, zBlockAddress);

  // const treasuryAddress = '0x0D0817A7De44FE7685c2e35144AD8dAB5Df062fB';
  // const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  // deployer.deploy(Distributor, treasuryAddress, blockAddress, 28800, 1642024800);
};
