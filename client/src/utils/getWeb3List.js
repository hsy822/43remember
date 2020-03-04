import Web3 from "web3";

const getWeb3List = () =>
  new Promise(async (resolve, reject) => {
    const provider = new Web3.providers.HttpProvider(
      "https://mainnet.infura.io/v3/38a0771a75c4474cb0f0703f6b053c2d"
    );
    const web3 = new Web3(provider);
    console.log("No web3 instance injected, using Local web3.");
    resolve(web3);
  });

export default getWeb3List;
