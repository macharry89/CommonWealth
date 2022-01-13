const StakingHelper = artifacts.require("BlockStakingHelper");

module.exports = function (deployer) {
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const stakingAddress = '0x3f90d1B553948d4807B5589C859CA9Ff0a34CE29';
  deployer.deploy(StakingHelper, stakingAddress, blockAddress);
};
