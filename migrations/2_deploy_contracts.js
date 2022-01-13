const StakingHelper = artifacts.require("BlockStakingHelper");

module.exports = function (deployer) {
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const stakingAddress = '0x52e1232D93fe13fCF38e0b4907094ff1Bc4c88ff';
  deployer.deploy(StakingHelper, stakingAddress, blockAddress);
};
