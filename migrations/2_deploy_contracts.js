const TimeBondDepository = artifacts.require("TimeBondDepository");

module.exports = function (deployer) {
  const timeAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const anyswapV5ERC20 = '0x9D4409914B92c4B6e44CD73413e3369e7F3335B7';
  const treasury = '0x07B834EBAA121566F89cAc43d712813c91bF8bD0';
  const dao = '0x90E03F137288c7dC2aD942b25Faeaa98E5b3D0C9';
  const feed = '0x8581D1D42b5Cb8d6fA2A901ebbdD0BD4f19aB9f6'; //EACAggregatorProxy
  deployer.deploy(TimeBondDepository, timeAddress, anyswapV5ERC20, treasury, dao, feed);
};
