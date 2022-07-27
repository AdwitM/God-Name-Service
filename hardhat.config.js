require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.15",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/cuj10P5kwylYzK0yQ3p9oyad3KD7J3jV",
      accounts: ["1df4c912b243fe2a0900b493b65160a38185f65c6675b476765ba39a9be78c3c"],
    }
  }
};