const Staking = artifacts.require("BlockStaking");

module.exports = function (deployer) {
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const zBlockERC20Address = '0x55e0196DDA713BD5bD34C6B986adabE011cB8138';
  deployer.deploy(Staking, blockAddress, zBlockERC20Address, 28800, 440, 1641858767);
};
