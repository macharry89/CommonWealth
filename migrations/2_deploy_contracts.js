// const TimeBondDepository = artifacts.require("TimeBondDepository");
const BlockBondDepository = artifacts.require("BlockBondDepository");

module.exports = function (deployer) {
  // const timeAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  // const anyswapV5ERC20 = '0x2B699A8315930b7DD3731d43CcBEc64a62B4Fc8E';
  // const joePair = '0x910455733a5eb5720b201a2189089086aa696718';
  const joePair = '0xff7569062d064046010532eab22fce913236c428';
  const treasury = '0x0D0817A7De44FE7685c2e35144AD8dAB5Df062fB';
  const dao = '0x90E03F137288c7dC2aD942b25Faeaa98E5b3D0C9';
  const bondCalculator = '0x2684a6BF8e9ECF523d2cFa396F73C9Ccb7d1AF9f';
  // deployer.deploy(TimeBondDepository, timeAddress, anyswapV5ERC20, treasury, dao, bondCalculator);
  // deployer.deploy(TimeBondDepository, timeAddress, joePair, treasury, dao, bondCalculator);
  // deployer.deploy(BlockBondDepository, blockAddress, anyswapV5ERC20, treasury, dao, bondCalculator);
  deployer.deploy(BlockBondDepository, blockAddress, joePair, treasury, dao, bondCalculator);
};
