import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { v_, add, div, mvpx, mfpx, mfsz } from '../utils/utils'
import { VIEW_POPULATE_TICKET_ } from '../store/view'
import Indicator from './Indicator'
import { markets } from '../protobufs'

const styles = theme => ({
	root: {
  },
})

class QuickBar extends Component {
  render() {
    if (this.props.market === null) {
      return <div/>
    }

    let { classes, market, VIEW_POPULATE_TICKET_ } = this.props

    let pxspan = px =>
      px ? (<span><b>{px}</b>&nbsp;{market.quote_asset.code}</span>) : (<span>&nbsp;</span>)

		return (
      <Grid container direction="row" spacing={0} className={classes.root}>
        <Grid item sm={4}>
          <Indicator
            market={market}
            label="Bid"
            fields={[
              () => pxspan(mfpx(market, 'bid')),
              () => mfsz(market, 'bidQty') || '-',
            ]}
            actions={[{
              label: "Hit",
              color: "bearish",
              onClick: () =>
                VIEW_POPULATE_TICKET_({
                  market: market,
                  orderType: markets.OrderType.IOC,
                  sell: {
                    px: market.quote.bid.val,
                    qty: market.quote.bidQty.val,
                  }
                })
            },{
              label: "Improve",
              color: "bullish",
              onClick: () =>
                VIEW_POPULATE_TICKET_({
                  market: market,
                  orderType: markets.OrderType.GTC,
                  buy: {
                    px: market.quote.bid.val + 1,
                  }
                })
            }]}
          />
        </Grid>

        <Grid item sm={4}>
          <Indicator
            market={market}
            label="Mid"
            fields={[
              () => pxspan(mvpx(market, div(add(v_(market.quote.bid), v_(market.quote.ask)), 2))),
              () => '-'
            ]}
            actions={[{
              label: "Buy",
              color: "bullish",
              onClick: () =>
                VIEW_POPULATE_TICKET_({
                  market: market,
                  orderType: markets.OrderType.GTC,
                  buy: {
                    px: div(add(v_(market.quote.bid), v_(market.quote.ask)), 2).toFixed(0)
                  },
                })
            },{
              label: "Sell",
              color: "bearish",
              onClick: () =>
                VIEW_POPULATE_TICKET_({
                  market: market,
                  orderType: markets.OrderType.GTC,
                  sell: {
                    px: div(add(v_(market.quote.bid), v_(market.quote.ask)), 2).toFixed(0)
                  }
                })
            }]}
          />
        </Grid>

        <Grid item sm={4}>
          <Indicator
            market={market}
            label="Ask"
            fields={[
              () => pxspan(mfpx(market, 'ask')),
              () => mfsz(market, 'askQty') || '-',
            ]}
            actions={[{
              label: "Improve",
              color: "bearish",
              onClick: () =>
                VIEW_POPULATE_TICKET_({
                  market: market,
                  orderType: markets.OrderType.GTC,
                  sell: {
                    px: market.quote.ask.val - 1,
                  }
                })
            },{
              label: "Lift",
              color: "bullish",
              onClick: () =>
                VIEW_POPULATE_TICKET_({
                  market: market,
                  orderType: markets.OrderType.IOC,
                  buy: {
                    px: market.quote.ask.val,
                    qty: market.quote.askQty.val,
                  }
                })
            }]}
          />
        </Grid>
      </Grid>
  	)
  	}
}

QuickBar.propTypes = {
  classes: PropTypes.object.isRequired,
  VIEW_POPULATE_TICKET_: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  market: state.markets[state.view.market] || null
})

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, {
    VIEW_POPULATE_TICKET_,
  })
)(QuickBar)
