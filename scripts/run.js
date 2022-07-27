const main = async () => {
    // The first return is the deployer, the second is a random account
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy();
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let txn = await domainContract.register("helo");
    await txn.wait();
  
    const domainAddress = await domainContract.getAddress("helo");
    console.log("Owner of domain helo:", domainAddress);
  
    // Trying to set a record that doesn't belong to me!
    txn = await domainContract.connect(randomPerson).setRecord("helo", "Haha my domain now!");
    await txn.wait();
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();