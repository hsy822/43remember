var Remember43 = artifacts.require("./Remember43.sol");
const timeout = 5;

module.exports = function(deployer) {
  deployer.deploy(Remember43, timeout);
};
