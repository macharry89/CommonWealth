const Staking = artifacts.require("BlockStaking");

module.exports = function (deployer) {
  const blockAddress = '0x3820325e38050F878C66e3e544c2D0098c8e5a1F';
  const zBlockERC20Address = '0x2A392B930eE7B325aBA70C810199C97f6Ae3a252';
  deployer.deploy(Staking, blockAddress, zBlockERC20Address, 28800, 440, 1641858767);
};
