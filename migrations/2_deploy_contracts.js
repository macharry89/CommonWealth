const wMEMO = artifacts.require("wMEMO");

module.exports = function (deployer) {
  const memoriesERC20Address = '0x27483bd899EfF7D95d0ECb14a167eFcbEe919925';
  const wMEMO_ = deployer.deploy(wMEMO, memoriesERC20Address);
};
