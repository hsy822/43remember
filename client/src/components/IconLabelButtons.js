import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import VerticalAlignBottom from "@material-ui/icons/VerticalAlignBottom";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

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
