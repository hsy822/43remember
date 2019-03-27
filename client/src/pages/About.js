import React, { Component } from "react";

let style = {
  width: "100vw",
  height: "100vh"
};

class About extends Component {
  render() {
    return (
      <div>
        <iframe
          style={style}
          title="docs"
          src="https://docs.google.com/document/d/e/2PACX-1vRkOkeWq868SaTdPdHzgccz_xoNziM8sLSV3OTA5Mtvb3nVO_r4r56b3QtFtwR_OwS8l7010lwkApjg/pub?embedded=true"
        />
      </div>
    );
  }
}

export default About;
