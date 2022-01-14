const Treasury = artifacts.require("BlockTreasury");

module.exports = function (deployer) {
  // const timeERC20TokenAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const blockAddress = '0x3820325e38050F878C66e3e544c2D0098c8e5a1F';
  const MIMAddress = '0x130966628846BFd36ff31a822705796e8cb8C18D';
  // const treasury = deployer.deploy(Treasury, timeERC20TokenAddress, MIMAddress, 0, 10);
  const treasury = deployer.deploy(Treasury, blockAddress, MIMAddress, 0, 10);
};
