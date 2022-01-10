const BlockBondDepository = artifacts.require("BlockBondDepository");

module.exports = function (deployer) {
  const blockAddress = '0x6fF83eb56d9Df4007eb3593757351F2FB0011F19';
  const WAVAX = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c';
  const treasury = '0x0D0817A7De44FE7685c2e35144AD8dAB5Df062fB';
  const dao = '0x90E03F137288c7dC2aD942b25Faeaa98E5b3D0C9';
  const feed = '0x8581D1D42b5Cb8d6fA2A901ebbdD0BD4f19aB9f6'; //EACAggregatorProxy
  deployer.deploy(BlockBondDepository, blockAddress, WAVAX, treasury, dao, feed);
};
