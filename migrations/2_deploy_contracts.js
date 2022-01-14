const StakingHelper = artifacts.require("BlockStakingHelper");

module.exports = function (deployer) {
  const blockAddress = '0x3820325e38050F878C66e3e544c2D0098c8e5a1F';
  const stakingAddress = '0x6d791Bf39D77831DE8c79C3EEa0554D2CE45FFcD';
  deployer.deploy(StakingHelper, stakingAddress, blockAddress);
};
