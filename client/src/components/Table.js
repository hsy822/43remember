import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import CirculaIndeterminate from "./Progress";
import Remember43Contract from "../contracts/Remember43.json";
import getWeb3List from "../utils/getWeb3List";
const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

const styles = theme => ({
  root: {
    width: "800px",
    margin: "0 auto",
    marginTop: theme.spacing.unit * 10
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class CustomPaginationActionsTable extends React.Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 5,
    contract: "",
    victimsCount: 0,
    isLoading: true
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3List();

      // Get the contract instance.
      const instance = new web3.eth.Contract(
        Remember43Contract.abi,
        "0x209c860cf96cd3968b6d0aaab1d5e13c62632bf5"
      );

      console.log(instance);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, contract: instance }, this.getList);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  getList = async page => {
    this.setState({ isLoading: true });
    const contract = this.state.contract;
    let count = await contract.methods.victimsCount().call();

    let victims = [];

    // for (let i = 1; i <= count; i++) {
    //   let victim = await contract.methods.getVictim(i).call();
    //   victims.push(createData(victim[0], victim[1], victim[2]));
    // }
    console.log(page);
    if (!page) {
      for (let i = Number(count); i > count - this.state.rowsPerPage; i--) {
        let victim = await contract.methods.getVictim(i).call();
        victims.push({
          idx: victim[0],
          name: victim[1],
          addr: victim[2]
        });
      }
      this.setState({
        rows: victims,
        victimsCount: count,
        page: 0,
        isLoading: false
      });
      console.log(victims);
    } else {
      for (
        let i = count - page * this.state.rowsPerPage;
        i > count - page * this.state.rowsPerPage - this.state.rowsPerPage;
        i--
      ) {
        let victim = await contract.methods.getVictim(i).call();
        if (victim[0] < 15000 && victim[0] > 0) {
          victims.push({
            idx: victim[0],
            name: victim[1],
            addr: victim[2]
          });
        }
      }
      this.setState({ rows: victims, page, isLoading: false });
      console.log(victims);
    }
  };

  handleChangePage = (event, page) => {
    this.getList(page);
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            {this.state.isLoading ? (
              <TableBody style={{ textAlign: "center" }}>
                <CirculaIndeterminate />
              </TableBody>
            ) : (
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.idx}>
                      <TableCell component="th" scope="row">
                        {row.idx}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.addr}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            )}

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5]}
                  colSpan={3}
                  count={Number(this.state.victimsCount)}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomPaginationActionsTable);
