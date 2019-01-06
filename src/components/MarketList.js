import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import ScrollTable from './utils/scrollTable'
import { VIEW_SET_MARKET_ } from '../store/view'
import { sub, div, mfv, mfpx, mfsz } from '../utils/utils'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  marketColumn:{
    whiteSpace: 'nowrap',
  },
});

class MarketList extends Component {

  rowData = row => {
    let columns = []
    if (this.props.markets) {
      let m = this.props.markets[row]

      var percent = (100 * div(Math.abs(sub(mfv(m, 'last'), mfv(m, 'closePrior'))), mfv(m, 'closePrior'))).toFixed(2) + "%"
      let up = sub(mfv(m, 'last'), mfv(m, 'closePrior')) > 0

      percent = up ? "+" + percent : "-" + percent;
      percent = percent === "-0.00%" ? "" : percent;

      columns.push(m.base_symbol)
      columns.push(mfpx(m, 'last'))
      columns.push(m.quote_symbol)
      columns.push({ percent, 'rank': up})
      columns.push(mfsz(m, 'volume'))
    }
    return columns
  }

  handleMarketClick = (event, row) =>{
    this.props.VIEW_SET_MARKET_(row[0][0] + "|" + row[0][2])
  }

  rowDataFormating = (row, previous_row) => {
    let columns = [...row]
    columns[3] = <div style={row[3].rank ? {color:'green'} : {color: 'red'}}> {row[3].percent} {row[3].percent.length > 0? (<i className={row[3].rank ? 'fa fa-arrow-up' : 'fa fa-arrow-down'}></i>) : ""} </div>;

    return columns
  }

  render() {
    return (
      <ScrollTable
        headers={ ['Market', 'Last', 'Vs.' ,'Change', 'Volume' ] }
        rows={ Object.keys(this.props.markets) }
        rowData={ this.rowData }
        marketsClass= { this.props.classes.marketColumn }
        markets={ this.props.markets }
        clickHandler={ this.handleMarketClick }
        dispatch={ this.props.dispatch }
        rowBanded={true}
        firstHide={true}
        rowDataFormating={this.rowDataFormating}>
      </ScrollTable>
    )
  }
}

MarketList.propTypes = {
  markets: PropTypes.object.isRequired,
  VIEW_SET_MARKET_: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  markets: state.markets,
  view: state.view
})

export default connect(mapStateToProps, {
  VIEW_SET_MARKET_
})(withStyles(styles)(MarketList))
