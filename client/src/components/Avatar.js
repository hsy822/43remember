import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = {
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Nasol Kim"
        src="img/nasol.jpg"
        className={classes.bigAvatar}
      />
      <Avatar
        alt="Sekwang Oh"
        src="img/sekwang.jpeg"
        className={classes.bigAvatar}
      />
      <Avatar
        alt="Soto Jang"
        src="img/soto.PNG"
        className={classes.bigAvatar}
      />
      <Avatar
        alt="Bomsol Kim"
        src="img/bomsol.png"
        className={classes.bigAvatar}
      />
      <Avatar
        alt="Sooyoung Hyun"
        src="img/soo.jpg"
        className={classes.bigAvatar}
      />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);
