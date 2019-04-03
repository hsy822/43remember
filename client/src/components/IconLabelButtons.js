import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import VerticalAlignBottom from "@material-ui/icons/VerticalAlignBottom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <div style={{ textAlign: "right" }}>
      <a href="/manual.pdf" download style={{ textDecoration: "none" }}>
        <Button variant="contained" color="default" className={classes.button}>
          사용 매뉴얼
          <VerticalAlignBottom className={classes.rightIcon} />
        </Button>
      </a>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelButtons);
