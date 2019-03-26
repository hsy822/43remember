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

class ModifyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      web3: props.web3,
      contract: props.contract,
      coinbase: props.coinbase,
      victimIdx: "",
      victimName: "",
      victimAddr: "",
      open: false,
      resultIdx: "",
      resultName: "",
      resultAddr: "",
      resultCreateTime: "",
      resultOpen: false
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleResultOpen = () => {
    this.setState({ resultOpen: true });
  };

  handleResultClose = () => {
    this.setState({ resultOpen: false });
  };

  handleChange = attr => e => {
    this.setState({ [attr]: e.target.value });
  };

  modifyVictim = async e => {
    e.preventDefault();
    this.handleClose();

    const {
      contract,
      coinbase,
      victimIdx,
      victimName,
      victimAddr
    } = this.state;
    console.log(victimIdx, victimName, victimAddr);
    let result = await contract.methods
      .modifyVictim(victimIdx, victimName, victimAddr)
      .send({ from: coinbase });
    console.log(result);
    this.setState({
      resultIdx: result.events.victimModified.returnValues[0],
      resultName: result.events.victimModified.returnValues[1],
      resultAddr: result.events.victimModified.returnValues[2],
      resultCreateTime: this.convert(
        result.events.victimModified.returnValues[3]
      )
    });
    this.handleResultOpen();
  };

  convert = createTime => {
    // Months array
    var months_arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    // Convert timestamp to milliseconds
    var date = new Date(createTime * 1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = months_arr[date.getMonth()];

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = "0" + date.getMinutes();

    // Seconds
    var seconds = "0" + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime =
      month +
      "-" +
      day +
      "-" +
      year +
      " " +
      hours +
      ":" +
      minutes.substr(-2) +
      ":" +
      seconds.substr(-2);

    return convdataTime;
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
            희생자 정보 수정
          </Typography>
          <form className={this.state.classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="victimIdx_modify">고유번호</InputLabel>
              <Input
                id="victimIdx_modify"
                name="victimIdx_modify"
                autoComplete="victimIdx_modify"
                autoFocus
                onChange={this.handleChange("victimIdx")}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="victimName_modify">이름</InputLabel>
              <Input
                id="victimName_modify"
                name="victimName_modify"
                autoComplete="victimName_modify"
                autoFocus
                onChange={this.handleChange("victimName")}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="victimAddr_modify">주소</InputLabel>
              <Input
                name="victimAddr_modify"
                id="victimAddr_modify"
                autoComplete="victimAddr_modify"
                autoFocus
                onChange={this.handleChange("victimAddr")}
              />
            </FormControl>
            <div>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleClickOpen}
              >
                등록
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"다시 한번 내용을 확인해 주세요."}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    고유번호: {this.state.victimIdx} <br />
                    이름: {this.state.victimName} <br />
                    주소: {this.state.victimAddr}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    취소
                  </Button>
                  <Button onClick={this.modifyVictim} color="primary" autoFocus>
                    확인
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
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
                    고유 번호: {this.state.resultIdx} <br />
                    이름: {this.state.resultName} <br />
                    주소: {this.state.resultAddr} <br />
                    최초등록: {this.state.resultCreateTime} <br />
                    <br />* 최초 등록 후 20분 안에만 수정이 가능합니다.
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

ModifyForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModifyForm);
