import React, { Component } from "react";

let style = {
  width: "100vw",
  height: "100vh"
};

class Excel extends Component {
  render() {
    return (
      <div>
        <iframe
          style={style}
          title="excel"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTjXn9H9-pUjP-GTINSdSycU6V6GCalSsjQuAeR0okUHd_A-97qHpnhecaxbWWUUI7N9vKdsK2AAAHT/pubhtml?widget=true&amp;headers=false"
        />
      </div>
    );
  }
}

export default Excel;
