const StakingHelper = artifacts.require("BlockStakingHelper");

module.exports = function (deployer) {
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const stakingAddress = '0xD597919c46240171737fa851c414b3AA51421bAd';
  deployer.deploy(StakingHelper, stakingAddress, blockAddress);
};
