const StakingHelper = artifacts.require("BlockStakingHelper");

module.exports = function (deployer) {
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const stakingAddress = '0x7D71beaa180491F85CD37d87363D4a0DF8F88b20';
  deployer.deploy(StakingHelper, stakingAddress, blockAddress);
};
