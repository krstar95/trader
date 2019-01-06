import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { markets } from '../protobufs'
import { sub, div, mfv, mfpx, mfsz, mvpx } from '../utils/utils'
import SimpleTickChart from './SimpleTickChart'

import './ActiveMarketSummary.css'

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "#1d262c",
  },
  numeric: {
    textAlign: 'right'
  }
});

class ActiveMarketSummary extends Component {
  state = {
    market: markets['LC|LUS']
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      market: nextProps.markets[nextProps.view.market]
    })
  }

  render() {
    const { classes, height } = this.props
    const { market } = this.state

    if (market === undefined) {
      return (
        <Card>
        </Card>
      );
    }

    let base_logo = market.base_asset.icon;
    let quote_logo = market.quote_asset.icon;

    let last = mfv(market, 'last')

    // 24 Hour
    let close24 = mfpx(market, 'closePrior24')
    let open24 = mfpx(market, 'open24')
    let high24 = mfpx(market, 'high24')
    let low24 = mfpx(market, 'low24')
    let volume24 = mfsz(market, 'volume24')
    let change24 = sub(last, close24)
    let abs_change24 = Math.abs(change24)
    let abs_percent_change24 = (100 * div(abs_change24, close24)).toFixed(2)
    let up24 = change24 > 0

    // Day Session
    let close = mfv(market, 'closePrior')
    let open = mfpx(market, 'open')
    let high = mfpx(market, 'high')
    let low = mfpx(market, 'low')
    let volume = mfsz(market, 'volume')    
    let change = sub(last, close)
    let abs_change = Math.abs(change)
    let abs_percent_change = (100 * div(abs_change, close)).toFixed(2)
    let up = change > 0

    abs_change24 = mvpx(market, abs_change24)
    abs_change = mvpx(market, abs_change)
    last = mvpx(market, last)

    return (
      <Card
        style={{ height: height }}
        className={classes.root}>
        <CardContent className="active-summary">
          <Grid container spacing={8}>
            <Grid item sm={2} className="no-drag marketLogo">
              <img className="market-base-icon" src={base_logo} />
              <img className="market-quote-icon"src={quote_logo} />
              <Typography component="h5" variant="h5">{market.symbol}</Typography>
            </Grid>
            <Grid item sm={2} className="no-drag">
              <Typography component="h3" variant="h3">{ last }</Typography> 
              <Typography component="h5" variant="h5">
                <span className={ up ? 'increase' : 'decrease' }>
                  { up ? ' +' : ' -' }{ abs_percent_change }% <i className={ up ? 'fa fa-arrow-up' : 'fa fa-arrow-down'}></i>
                </span>
              </Typography>
              <div><span className="values">{ volume }</span> {market.base_symbol} Traded</div>
            </Grid>
            <Grid item sm={4}>
              <SimpleTickChart />
            </Grid>
            <Grid item sm={2} className={classes.numeric}>
              <div>Session</div>
              <div>OPEN <span className="values">{ open }</span> {market.quote_symbol}</div>
              <div>HIGH <span className="values">{ high }</span> {market.quote_symbol}</div>
              <div>LOW <span className="values">{ low }</span> {market.quote_symbol}</div>
              <div>VOLUME <span className="values">{ volume }</span> {market.base_symbol}</div>
            </Grid>
            <Grid item sm={2} className={classes.numeric}>
              <div>24 Hour</div>
              <div>OPEN <span className="values">{ open24 }</span> {market.quote_symbol}</div>
              <div>HIGH <span className="values">{ high24 }</span> {market.quote_symbol}</div>
              <div>LOW <span className="values">{ low24 }</span> {market.quote_symbol}</div>
              <div>VOLUME <span className="values">{ volume24 }</span> {market.base_symbol}</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view,
    markets: state.markets
  }
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps)
)(ActiveMarketSummary)
