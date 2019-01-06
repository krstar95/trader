import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ScrollTable from './utils/scrollTable'
import {formatAsset} from '../utils/utils'
import moment from 'moment'
import Big from 'big.js'

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

class Trades extends Component {
  rowData(row){
    let columns = []
    let nanoseconds = ""
    if (row.timestamp.nanoseconds) {
        nanoseconds = "." + row.timestamp.nanoseconds.toString()
    }
    let seconds = Big(row.timestamp.seconds.toString() + nanoseconds)
    columns.push(seconds)
    columns.push(row.price)
    columns.push(row.size)
    if (row.taker) { // 0=Side.BUY 1=Side.SELL
      columns.push('S')
      // columns.push('@alice') //row.seller)
      // columns.push('hit')
      // columns.push('@bob') //row.buyer)
    }
    else {
      columns.push('B')
      // columns.push('@chuck') //row.buyer)
      // columns.push('lifted')
      // columns.push('@dave') //row.seller)
    }
    return columns
  }

  rowColor(row, previous_row, last_color){
    let price = row[1]
    let previous_price = previous_row[1]
    let color

    if(previous_price > price){
      color = this.classes.rowRed
    }
    else if(previous_price < price){
      color = this.classes.rowGreen
    }
    else{
      color = last_color
    }
    return color

  }

  rowDataFormating(row, previous_row){
    let columns = []
    let date = new Date()
    let seconds = row[0]
    let nanoseconds = seconds.toString().split(".")[1]
    nanoseconds = nanoseconds ? "." + nanoseconds : ""
    seconds = seconds.toString().split(".")[0]

    date.setTime(seconds)
    //columns.push(moment(date*1000).format('YYYY-MM-DD HH:mm:ss')+nanoseconds)
    columns.push(moment(date*1000).format('HH:mm:ss'))
    columns.push(formatAsset(row[1], this.market.quote_asset))
    columns.push(formatAsset(row[2], this.market.base_asset))
    columns.push(row[3])
    // columns.push(row[4])
    // columns.push(row[5])
    // columns.push(row[6])
    return columns
  }

  render() {
    let { classes, market, trades } = this.props

    if (!market) {
      return <div/>
    }
    
    trades = trades ? trades.toArray().reverse() : []

    return (
      <Card style={{height:this.props.height}} className={classes.flex}>
          <CardHeader title="Recent Trades" />
          <ScrollTable headers={['Time', 'Price', 'Size', 'B/S']/*, 'Taker', '', 'Maker']*/}
                       rows={trades}
                       rowColor={this.rowColor}
                       rowData={this.rowData}
                       rowSmall={true}
                       market={market}
                       rowBanded={true}
                       rowDataFormating={this.rowDataFormating}/>
      </Card>
    )
  }
}

// Trades.propTypes = {
//   market: PropTypes.object.isOptional,
//   trades: PropTypes.object.isOptional,
// }

const mapStateToProps = (state) => ({
  market: state.marketprops[state.view.market],
  trades: state.md.trades[state.view.market],
})

export default connect(mapStateToProps)(withStyles(styles)(Trades));
