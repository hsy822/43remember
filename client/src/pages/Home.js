import React, { Component } from "react";
import CustomPaginationActionsTable from "../components/Table";
import PaperSheet from "../components/Paper";

class Home extends Component {
  render() {
    return (
      <div>
        <CustomPaginationActionsTable />
        <PaperSheet />
      </div>
    );
  }
}

export default Home;
