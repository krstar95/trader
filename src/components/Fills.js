import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ScrollTable from './utils/scrollTable'
import { formatAsset } from '../utils/utils'
import { markets as pb } from '../protobufs'
import moment from 'moment'

const styles = theme => ({
  rowRed:{
    color: theme.palette.primary.main,
  },
  rowGreen:{
    color: theme.palette.secondary.main,
  },
  flex:{
    display:"flex",
    flexDirection:"column"
  },
});

class Fills extends Component {

  rowColor(row, next_row) {
    return row[4] == "SELL" ? this.classes.rowRed : this.classes.rowGreen
  }

  rowData(row) {
    let date = new Date()
    date.setTime(row.timestamp.seconds * 1000)
    let market = this.markets[row.market]
    return [
      moment(date).format('YYYY-MM-DD HH:mm:ss'),
      row.market,
      formatAsset(row.fill.price, market.quote_asset),
      formatAsset(row.fill.size, market.base_asset),
      (row.fill.side == pb.Side.BUY ? "BUY" : "SELL"),
      row.fill.took ? 'TAKE' : 'PROVIDE',
      row.orderID
    ]
  }

  render() {
    const { classes, markets, fills } = this.props

    return (
      <Card style={{height:this.props.height}} className={classes.flex}>
        <ScrollTable
          headers={['Time', 'Market', 'Price', 'Size', 'Side', 'Liquidity', 'Order ID']}
          rows={fills}
          rowColor={this.rowColor}
          rowData={this.rowData}
          rowSmall={true}
          rowBanded={true}
          markets={markets}>
        </ScrollTable>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  markets: state.marketprops,
  fills: state.fills,
})

export default connect(mapStateToProps)(withStyles(styles)(Fills))
