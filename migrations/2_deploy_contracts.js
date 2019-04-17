const Whistleblower = artifacts.require("Whistleblower");

module.exports = function(deployer) {
  deployer.deploy(Whistleblower);
};
