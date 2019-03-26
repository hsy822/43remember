import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FormVictim from "./FormVictim";
import FormContributor from "./FormContributor";
import CheckContributor from "./CheckContributor";
import ModifyForm from "./ModifyForm";
import CheckVictim from "./CheckVictim";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={8} sm={4}>
          <FormVictim
            web3={props.web3}
            contract={props.contract}
            coinbase={props.coinbase}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <CheckVictim web3={props.web3} contract={props.contract} />
          <ModifyForm
            web3={props.web3}
            contract={props.contract}
            coinbase={props.coinbase}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <CheckContributor
            web3={props.web3}
            contract={props.contract}
            coinbase={props.coinbase}
          />
          <FormContributor
            web3={props.web3}
            contract={props.contract}
            coinbase={props.coinbase}
          />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
