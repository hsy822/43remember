import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class AlertDialog extends React.Component {
  state = {
    open: false,
    contract: this.props.contract,
    coinbase: this.props.coinbase,
    victimName: this.props.victimName,
    victimAddr: this.props.victimAddr,
    victimIdx: this.props.victimIdx,
    parentsFunction: this.props.parentsFunction
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
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
              이름: {this.props.victimName} <br />
              주소: {this.props.victimAddr}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              취소
            </Button>
            <Button
              onClick={this.state.parentsFunction}
              color="primary"
              autoFocus
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
