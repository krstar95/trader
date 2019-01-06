import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui'
import { withStyles } from '@material-ui/core/styles'
import { ValueScale } from '@devexpress/dx-react-chart'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { scaleLinear } from 'd3-scale'
import wrapScale from './utils/d3-scale-wrapper'

const styles = () => ({
  root: {
    height: 'auto'
  },
  chart: {
    paddingRight: '20px',
  },
})

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={text}
    />
  )
}

class SimpleTickChart extends React.Component {
  render() {

    const { classes, market, trades, height } = this.props
 
    let min = null
    let max = 0
    let data = trades ? trades.map(trade => {
      let price = trade.price / 10**8
      if (min === null || price < min) {
        min = price
      }
      if (price > max) {
        max = price
      }
      return {
        time: trade.timestamp.seconds,
        price
      }
    }).toArray() : []

    return (
      <Paper className={classes.root}>
        <Chart
            data={data}
            height={90}
            className={classes.chart} >
          <ArgumentAxis
              showLabels={false}
              showTicks={false} />
          <ValueAxis
              max={max}
              labelComponent={ValueLabel} />
          <ValueScale
              name=""
              factory={() => wrapScale(scaleLinear(), 3)} />
          <LineSeries
              name={market.code}
              valueField="price"
              argumentField="time" />
        </Chart>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  market: state.marketprops[state.view.market],
  trades: state.md.trades[state.view.market],
})

export default compose(
	withStyles(styles, { name: 'SimpleTickChart' }),
	connect(mapStateToProps)
)(SimpleTickChart)
