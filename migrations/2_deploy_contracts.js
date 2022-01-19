const BlockBondDepository = artifacts.require("BlockBondDepository");

module.exports = function (deployer) {
  const blockAddress = '0x3820325e38050F878C66e3e544c2D0098c8e5a1F';
  // const WAVAX = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c';
  const WAVAX = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7';
  const treasury = '0xfaCcc55Dd72a67BFF9416400646bc9052d68E979';
  const dao = '0x7b689dFD314e49a996C879C9eBa8d9B62A24B6f7';
  // const feed = '0x8581D1D42b5Cb8d6fA2A901ebbdD0BD4f19aB9f6'; //EACAggregatorProxy
  const feed = '0x0a77230d17318075983913bc2145db16c7366156'; //EACAggregatorProxy
  
  deployer.deploy(BlockBondDepository, blockAddress, WAVAX, treasury, dao, feed);
};
