// const TimeBondDepository = artifacts.require("TimeBondDepository");
const BlockBondDepository = artifacts.require("BlockBondDepository");

module.exports = function (deployer) {
  // const timeAddress = '0x0cF22e3d8dB81CB9e606f3a7837c48c1B6fC9a27';
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const anyswapV5ERC20 = '0x9D4409914B92c4B6e44CD73413e3369e7F3335B7';
  // const joePair = '0x5C2fB7925542dF25E1B1A987E296C7A51c00b67F';
  // const joePair = '0xfB49E8165b285ACa80751D8b071E2afc1497beE8';
  const treasury = '0x07B834EBAA121566F89cAc43d712813c91bF8bD0';
  const dao = '0x90E03F137288c7dC2aD942b25Faeaa98E5b3D0C9';
  const bondCalculator = '0x6D5fe6E7B1aFA6bdC985A5aE1089191a6C0392cB';
  // deployer.deploy(TimeBondDepository, timeAddress, anyswapV5ERC20, treasury, dao, bondCalculator);
  // deployer.deploy(TimeBondDepository, timeAddress, joePair, treasury, dao, bondCalculator);
  deployer.deploy(BlockBondDepository, blockAddress, anyswapV5ERC20, treasury, dao, bondCalculator);
};
