// const TimeBondDepository = artifacts.require("TimeBondDepository");
const BlockBondDepository = artifacts.require("BlockBondDepository");

module.exports = function (deployer) {
  // const timeAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const blockAddress = '0x3820325e38050F878C66e3e544c2D0098c8e5a1F';
  // const anyswapV5ERC20 = '0x2B699A8315930b7DD3731d43CcBEc64a62B4Fc8E';
  const anyswapV5ERC20 = '0x130966628846BFd36ff31a822705796e8cb8C18D';
  // const joePair = '0xd532a4d2d58b678fda73ef8cf6d449e5a7dc5552';
  // const joePair = '0xff7569062d064046010532eab22fce913236c428';
  const treasury = '0xfaCcc55Dd72a67BFF9416400646bc9052d68E979';
  // const dao = '0x90E03F137288c7dC2aD942b25Faeaa98E5b3D0C9';
  const dao = '0x7b689dFD314e49a996C879C9eBa8d9B62A24B6f7';
  // const bondCalculator = '0x7E65fFef990CED7FE15c07f1F29a7Bdb86ccCae2';
  const bondCalculator = '0x0000000000000000000000000000000000000000';
  
  // deployer.deploy(TimeBondDepository, timeAddress, anyswapV5ERC20, treasury, dao, bondCalculator);
  // deployer.deploy(TimeBondDepository, timeAddress, joePair, treasury, dao, bondCalculator);
  deployer.deploy(BlockBondDepository, blockAddress, anyswapV5ERC20, treasury, dao, bondCalculator);
  // deployer.deploy(BlockBondDepository, blockAddress, joePair, treasury, dao, bondCalculator);
};
