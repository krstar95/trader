import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { Card, CardHeader } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
})

class Wallet extends React.PureComponent {

  render() {
    const { classes, wallets } = this.props

    if (wallets.isEmpty()) {
      return <div/>
    }

    return (
      <Card style={{height:this.props.height}}>
        <CardHeader title="Wallet" />
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Asset </TableCell>
                <TableCell align="right">Available</TableCell>
                <TableCell align="right">Open</TableCell>
                <TableCell align="right">total</TableCell>
              </TableRow> 
            </TableHead>
            <TableBody>
              {wallets.map((wallet, asset) => {
                return (
                  <TableRow key={asset}>
                    <TableCell align="right">{asset}</TableCell>
                    <TableCell align="right">{wallet.available}</TableCell>
                    <TableCell align="right">{wallet.open}</TableCell>
                    <TableCell align="right">{wallet.available+wallet.open}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  wallets: state.wallets,
})
  
export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Wallet)