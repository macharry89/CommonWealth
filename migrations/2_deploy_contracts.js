const Block = artifacts.require("BlockERC20Token");

module.exports = function (deployer) {
  deployer.deploy(Block);
};
