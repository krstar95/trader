
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { Card, CardHeader } from '@material-ui/core';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack } from '@devexpress/dx-react-chart';
import { ValueScale } from '@devexpress/dx-react-chart'
import { scaleLinear } from 'd3-scale'
import wrapScale from './utils/d3-scale-wrapper'

import Wallet from './wallet';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
})

class Pocket extends React.PureComponent {
  render() {
    const { classes, wallets } = this.props

    if (wallets.isEmpty()) {
      return <div/>
    }

    let data = []
    let barData = []
    let max = 0
    wallets.forEach((wallet, asset) => {
      if (wallet.open > max) {
        max = wallet.open / 10**8
      }
      if (wallet.available > max) {
        max = wallet.available / 10**8
      }
      barData.push({
        asset,
        available: wallet.available / 10**8,
        open: wallet.open / 10**8
      })
      if (wallet.open > 0) {
        data.push({
          name: asset + ' open',
          val: wallet.open / 10**8
        })
      }
      if (wallet.available > 0) {
        data.push({
          name: asset,
          val: wallet.available / 10**8
        })
      }
    })

    return (
      <Card style={{height:this.props.height}} className={classes.flex}>
        <CardHeader title="Pocket" />
        <Chart
            height={218}
            data={barData}>
          <ArgumentAxis />
          <ValueAxis
              max={max}
          />
          <ValueScale
              name=""
              factory={() => wrapScale(scaleLinear(), 5)} />
          <BarSeries
              name="Available"
              valueField="available"
              argumentField="asset"
          />
          <BarSeries
              name="Open"
              valueField="open"
              argumentField="asset"
          />
          <Legend
              position="bottom"
              rootComponent={Root}
              labelComponent={Label} />
          <Stack
              stacks={[
                { series: ['Available', 'Open'] },
              ]}
          />
        </Chart>

        <Wallet></Wallet>
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
)(Pocket)
  