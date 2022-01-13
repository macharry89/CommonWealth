const StakingWarmup = artifacts.require("BlockStakingWarmup");
// const Distributor = artifacts.require("Distributor");

module.exports = function (deployer) {
  const stakingAddress = '0x3f90d1B553948d4807B5589C859CA9Ff0a34CE29';
  const zBlockAddress = '0x6C766bC8C5Cee89Ac43BD57630E3aF613e7EB89e';
  deployer.deploy(StakingWarmup, stakingAddress, zBlockAddress);

  // const treasuryAddress = '0x0D0817A7De44FE7685c2e35144AD8dAB5Df062fB';
  // const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  // deployer.deploy(Distributor, treasuryAddress, blockAddress, 28800, 1642024800);
};
