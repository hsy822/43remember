import React, { Component } from "react";
import Remember43Contract from "../contracts/Remember43.json";
import getWeb3 from "../utils/getWeb3";

import "../App.css";
import FullWidthGrid from "../components/FullWidthGrid.js";

class Admin extends Component {
  state = { web3: null, accounts: null, contract: null, coinbase: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const coinbase = accounts[0];
      // Get the contract instance.
      const instance = new web3.eth.Contract(
        Remember43Contract.abi,
        "0x209c860cf96cd3968b6d0aaab1d5e13c62632bf5"
      );

      console.log(instance);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState(
        { web3, accounts, contract: instance, coinbase },
        this.runExample
      );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {};

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <FullWidthGrid
          web3={this.state.web3}
          contract={this.state.contract}
          coinbase={this.state.coinbase}
        />
      </div>
    );
  }
}

export default Admin;
