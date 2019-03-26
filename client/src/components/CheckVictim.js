import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Check from "@material-ui/icons/Check";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class CheckVictim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      web3: props.web3,
      contract: props.contract,
      result: "",
      victimIdx: "",
      victimName: "",
      victimAddr: ""
    };
  }

  handleChange = attr => e => {
    this.setState({ [attr]: e.target.value });
  };

  getVictim = async e => {
    e.preventDefault();
    const { contract, victimIdx } = this.state;
    let result = await contract.methods.getVictim(victimIdx).call();
    this.setState({
      victimName: result[1],
      victimAddr: result[2]
    });
  };

  render() {
    return (
      <main className={this.state.classes.main}>
        <CssBaseline />
        <Paper className={this.state.classes.paper}>
          <Avatar className={this.state.classes.avatar}>
            <Check />
          </Avatar>
          <Typography component="h1" variant="h5">
            희생자 확인
          </Typography>
          <form className={this.state.classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="victimIdx">고유번호</InputLabel>
              <Input
                id="victimIdx"
                name="victimIdx"
                autoComplete="victimIdx"
                autoFocus
                onChange={this.handleChange("victimIdx")}
              />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={this.state.classes.submit}
              onClick={this.getVictim}
            >
              조회
            </Button>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="victimName_chk">이름</InputLabel>
              <Input
                id="victimName_chk"
                name="victimName_chk"
                autoComplete="victimName_chk"
                autoFocus
                readOnly
                value={this.state.victimName}
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="victimAddr_chk">주소</InputLabel>
              <Input
                name="victimAddr_chk"
                id="victimAddr_chk"
                autoComplete="victimAddr_chk"
                autoFocus
                readOnly
                value={this.state.victimAddr}
              />
            </FormControl>
          </form>
        </Paper>
      </main>
    );
  }
}

CheckVictim.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckVictim);
