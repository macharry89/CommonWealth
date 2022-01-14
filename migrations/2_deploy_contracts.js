// const StakingWarmup = artifacts.require("BlockStakingWarmup");
const Distributor = artifacts.require("Distributor");

module.exports = function (deployer) {
  // const stakingAddress = '0x6d791Bf39D77831DE8c79C3EEa0554D2CE45FFcD';
  // const zBlockAddress = '0x2A392B930eE7B325aBA70C810199C97f6Ae3a252';
  // deployer.deploy(StakingWarmup, stakingAddress, zBlockAddress);

  const treasuryAddress = '0xfaCcc55Dd72a67BFF9416400646bc9052d68E979';
  const blockAddress = '0x3820325e38050F878C66e3e544c2D0098c8e5a1F';
  deployer.deploy(Distributor, treasuryAddress, blockAddress, 28800, 1642024800);
};
