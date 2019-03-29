import React, { Component } from "react";
import CustomPaginationActionsTable from "../components/Table";
import PaperSheet from "../components/Paper";
import IconLabelButtons from "../components/IconLabelButtons";

class Home extends Component {
  render() {
    return (
      <div>
        <IconLabelButtons />
        <CustomPaginationActionsTable />
        <PaperSheet contributor={true} />
        <PaperSheet />
      </div>
    );
  }
}

export default Home;
