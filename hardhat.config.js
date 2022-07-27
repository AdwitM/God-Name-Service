require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "YOUR_ALCHEMY_MUMBAI_URL",
      accounts: [""],
    }
  }
};