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
    [theme.breakpoints.up(430 + theme.spacing.unit * 3 * 2)]: {
      width: 430,
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

class CheckContributor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      web3: props.web3,
      contract: props.contract,
      coinbase: props.coinbase,
      account: "",
      result: ""
    };
  }

  accountChange = e => {
    this.setState({
      account: e.target.value
    });
  };

  checkAccount = async e => {
    e.preventDefault();
    let contract = this.state.contract;
    let result = await contract.methods
      .isContributor(this.state.account)
      .call();
    this.setState({ result });
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
            참여자 확인
          </Typography>
          <form className={this.state.classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="contributorAccount_check">
                Account
              </InputLabel>
              <Input
                id="contributorAccount_check"
                name="contributorAccount_check"
                autoComplete="contributorAccount_check"
                autoFocus
                onChange={this.accountChange}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.state.classes.submit}
              onClick={this.checkAccount}
            >
              확인
            </Button>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="resultChkCont" />
              <Input
                name="resultChkCont"
                id="resultChkCont"
                autoComplete="resultChkCont"
                readOnly
                value={this.state.result}
              />
            </FormControl>
          </form>
        </Paper>
      </main>
    );
  }
}

CheckContributor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckContributor);
