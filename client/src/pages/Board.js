import React, { Component } from "react";
import PaperSheet from "../components/Paper";

class Board extends Component {
  render() {
    return (
      <div>
        <PaperSheet disqus={true} />
      </div>
    );
  }
}

export default Board;
