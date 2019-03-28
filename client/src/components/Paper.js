import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ImageAvatars from "./Avatar";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "800px",
    margin: "0 auto",
    marginTop: theme.spacing.unit * 10
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        {props.contributor ? (
          <ImageAvatars />
        ) : (
          <p style={{ textAlign: "center" }}>
            후원 주소 : 0x724cA922Fa3F3fDD640e6d875200D0e77831E52F
          </p>
        )}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
