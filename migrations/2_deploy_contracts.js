const WonderZapIn = artifacts.require("Wonderland_ZapIn_V1");

module.exports = function (deployer) {
  const daoAddress = '0x90E03F137288c7dC2aD942b25Faeaa98E5b3D0C9';
  const wonderZapIn = deployer.deploy(WonderZapIn, daoAddress);
};
