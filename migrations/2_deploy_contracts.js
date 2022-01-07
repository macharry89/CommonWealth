const Treasury = artifacts.require("BlockTreasury");

module.exports = function (deployer) {
  // const timeERC20TokenAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const MIMAddress = '0xb701fCdF657CDa7256bF1ecFf340cae590Fc1286';
  // const treasury = deployer.deploy(Treasury, timeERC20TokenAddress, MIMAddress, 0, 10);
  const treasury = deployer.deploy(Treasury, blockAddress, MIMAddress, 0, 10);
};
