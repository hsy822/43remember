import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ImageAvatars from "./Avatar";
import Disqus from "disqus-react";

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
  const disqusShortname = "remember43";
  const disqusConfig = {
    url: "http://remember43.org", //this.props.pageUrl
    identifier: "article-id", //this.props.uniqueId
    title: "Remember43" //this.props.title
  };

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        {props.contributor ? (
          <ImageAvatars />
        ) : !props.disqus ? (
          <p style={{ textAlign: "center" }}>
            후원 주소 : 0x724cA922Fa3F3fDD640e6d875200D0e77831E52F (ETH)
          </p>
        ) : (
          <div className="article-container">
            <p>자유롭게 여러분의 글을 남겨주세요.</p>

            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        )}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
