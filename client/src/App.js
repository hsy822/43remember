import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Admin } from "./pages";
import Background from "./img/image1.jpg";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

let style = {
  background: `url(${Background})`,
  // background: `url(${Background}) no-repeat center center`,
  width: "100%",
  height: "100%",
  position: "absolute"
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root} style={style}>
        <Router>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="희생자 명단" component={Link} to="/remember43/" />
              <Tab label="관리" component={Link} to="/remember43/admin" />
            </Tabs>
          </AppBar>
          <Route exact path="/remember43/" component={Home} />
          <Route path="/remember43/admin" component={Admin} />
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
