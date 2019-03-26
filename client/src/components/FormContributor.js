import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import ContactMail from "@material-ui/icons/ContactMail";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

class FormContributor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      web3: props.web3,
      contract: props.contract,
      coinbase: props.coinbase,
      account: "",
      checkedA: true,
      resultOpen: false,
      resultAddr: "",
      resultState: ""
    };
  }

  handleResultOpen = () => {
    this.setState({ resultOpen: true });
  };

  handleResultClose = () => {
    this.setState({ resultOpen: false });
  };

  handleChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  accountChange = e => {
    this.setState({ account: e.target.value });
  };

  setContributorState = async e => {
    e.preventDefault();
    const { contract, account, coinbase, checkedA } = this.state;
    let result = await contract.methods
      .setContributor(account, checkedA)
      .send({ from: coinbase });
    console.log(result);
    this.setState({
      resultAddr: result.events.contributorSet.returnValues.contributor,
      resultState: result.events.contributorSet.returnValues.state
    });
    this.handleResultOpen();
  };

  render() {
    return (
      <main className={this.state.classes.main}>
        <CssBaseline />
        <Paper className={this.state.classes.paper}>
          <Avatar className={this.state.classes.avatar}>
            <ContactMail />
          </Avatar>
          <Typography component="h1" variant="h5">
            참여자 등록/취소
          </Typography>
          <form className={this.state.classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="contributorAccount_set">주소</InputLabel>
              <Input
                name="contributorAccount_set"
                id="contributorAccount_set"
                autoComplete="contributorAccount_set"
                onChange={this.accountChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange("checkedA")}
                value="checkedA"
              />
              {this.state.checkedA.toString()}
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={this.state.classes.submit}
              onClick={this.setContributorState}
            >
              저장
            </Button>
            <div>
              <Dialog
                open={this.state.resultOpen}
                onClose={this.handleResultClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle>메시지</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    참여자 주소: {this.state.resultAddr} <br />
                    참여자 인증: {this.state.resultState.toString()} <br />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleResultClose} color="primary">
                    확인
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}

FormContributor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormContributor);
