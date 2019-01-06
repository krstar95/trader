import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { Card } from '@material-ui/core'
import { AutoSizer } from 'react-virtualized'
import MuiTable from 'mui-virtualized-table'
import { mvpx, mvsz } from '../utils/utils'
import { VIEW_POPULATE_TICKET_ } from '../store/view'
import { markets } from '../protobufs'

import 'react-virtualized/styles.css'; // only needs to be imported once

const styles = theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
  },
  cellHovered: {
    backgroundColor: 'black'
  },
  cell: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.unit / 2,
  }
})

class DepthContainer extends PureComponent {

  // returns array of:
  //   bid: best bid size
  //   px:  price level
  //   did: recent trades done at price level
  //   ask: best offer size
  //
  getMicrobook() {
    if (!this.props.market || !this.props.market.quote || !this.props.market.quote.last) {
      return []
    }
    let q = this.props.market.quote
    let rows = []
    if (q.last.val > q.ask.val && q.last.val > q.bid.val) {
      rows.push({ bid: 0,            px: q.last.val, ask:0,             did: q.lastQtyCum.val })
    }
    if (q.ask.val > 0) {
      rows.push({ bid: 0,            px: q.ask.val,  ask: q.askQty.val, did: q.last.val == q.ask.val ? q.lastQtyCum.val : 0 })
    }
    if (q.last.val < q.ask.val && q.last.val > q.bid.val) {
      rows.push({ bid: 0,            px: q.last.val, ask:0,             did: q.lastQtyCum.val })
    }
    if (q.bid.val > 0) {
      rows.push({ bid: q.bidQty.val, px: q.bid.val,  ask: 0,            did: q.last.val == q.bid.val ? q.lastQtyCum.val : 0 })
    }
    if (q.last.val < q.bid.val && q.last.val < q.ask.val) {
      rows.push({ bid: 0,            px: q.last.val, ask:0,             did: q.lastQtyCum.val })
    }
    return rows
  }

  formatBid = row =>
    row.bid ? mvsz(this.props.market, row.bid) : ''

  formatPrice = row =>
    row.px ? mvpx(this.props.market, row.px) : ''

  formatAsk = row =>
    row.ask ? mvsz(this.props.market, row.ask) : ''

  formatDid = row =>
    row.did ? mvsz(this.props.market, row.did) : ''

  handleCellClick = (col, row) => {
    if (!row[col.name]) {
      // ignore click on empty cells (for now)
      return
    }
    let pick = {
      market: this.props.market,
      price: row.px,
    }
    if (col.name == 'bid') {
      // hit the bid leaving no remainng size
      pick['orderType'] = markets.OrderType.IOC
      pick['sellQty'] = row.bid
    }
    else if (col.name == 'ask') {
      // lift the ask leaving no remaining size
      pick['orderType'] = markets.OrderType.IOC
      pick['buyQty'] = row.ask
    }
    this.props.VIEW_POPULATE_TICKET_(pick)
  }

	render() {
		let { classes } = this.props

		return (
      <Card className={classes.root} style={{height:this.props.height}}>
        <AutoSizer>
          {({ width, height }) => (
            <MuiTable
              classes={{
                cell: classes.cell,
                cellHovered: classes.cellHovered
              }}
              data={this.getMicrobook()}
              width={width}
              maxHeight={height}
              rowHeight={32}
              onCellClick={this.handleCellClick}
              includeHeaders={true}
              columns={[
                { name: 'bid', header: 'Bids',   width: 132, cell: this.formatBid },
                { name: 'px',  header: 'Price', width: 132, cell: this.formatPrice, cellProps: {style:{'fontWeight':'bold', 'textAlign':'center'}} },
                { name: 'ask', header: 'Asks',   width: 132, cell: this.formatAsk },
                { name: 'did', header: 'Last',  width: 132, cell: this.formatDid },
              ]}
              isCellHovered={
                (col, row, colHovered, rowHovered) =>
                  col === colHovered && row === rowHovered && col.name != 'did' && row[col.name]
              }
              cellProps={
                (col, row) =>
                  ({
                    style: {'textAlign': 'center'}
                  })
              }
            />
          )}
        </AutoSizer>
      </Card>
  	)
	}
}

DepthContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  market: state.markets[state.view.market]
})

export default compose(
	withStyles(styles),
	connect(mapStateToProps, {
    VIEW_POPULATE_TICKET_,
  })
)(DepthContainer)
