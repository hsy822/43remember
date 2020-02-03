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
          // src="https://docs.google.com/document/d/e/2PACX-1vSR9CMokWoRffjp1D8MV0q-85jM1Lw3l_-QP_cxiUEinwRsRYgMk7WWk_UCuvh51udFVYZ0UNVDc2GS/pub?embedded=true"
          src="https://docs.google.com/document/d/e/2PACX-1vROkuBkGa_AMdHxvZYUNqLAoQ84IXm3-LIRSafvQtgd4aeL2UsKOafYS3hC551vRhAJO9NmC5z8gUzb/pub?embedded=true"
        />
      </div>
    );
  }
}

export default About;
