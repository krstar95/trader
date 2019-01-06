import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import { markets } from '../protobufs'
import { formatAsset, orderStatusCodeLabel, cancelStatusCodeLabel } from '../utils/utils'
import moment from 'moment'
import { OS_OPEN, ORDERS_CANCEL_ } from '../store/orders'
import EnhancedTableToolbar from './EnhancedTableToolbar'

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const getSorting = (order, orderBy) =>
      order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)

const formatPrice = (market, val) =>
      market ? (val ? formatAsset(val, market.quote_asset) : '') : ''

const formatQty = (market, val) =>
      market ? (val ? formatAsset(val, market.base_asset) : '') : ''

const cols = [
  {
    id: 'time',
    align: 'left',
    label: 'Time',
    val: o => o.order.timestamp
  },
  {
    id: 'market',
    align: 'left',
    label: 'Market',
    val: o => o.order.market
  },
  {
    id: 'buy',
    align: 'right',
    label: 'Buy',
    val: o => o.order.side == markets.Side.BUY ? o.order.price : null
  },
  {
    id: 'sell',
    align: 'right',
    label: 'Sell',
    val: o => o.order.side == markets.Side.SELL ? o.order.price : null
  },
  {
    id: 'limit',
    align: 'right',
    label: 'Limit',
    val: o => o.order.price
  },
  {
    id: 'filled',
    align: 'right',
    label: 'Filled',
    val: o => 0
  },
  {
    id: 'remaining',
    align: 'right',
    label: 'Remaining',
    val: o => o.order.quantity
  },
  {
    id: 'total',
    align: 'right',
    label: 'Total',
    val: o => o.order.price * o.order.quantity
  },
  {
    id: 'avgfillprice',
    align: 'right',
    label: 'Average Price',
    val: o => null
  },
  {
    id: 'type',
    align: 'left',
    label: 'Type',
    val: o => markets.OrderType.Name(o.order.orderType)
  },
  {
    id: 'status',
    align: 'left',
    label: 'Status',
    val: o => null
  },
];

class EnhancedTableHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          {cols.map(col => {
            return (
              <TableCell
                key={col.id}
                align={col.align}
                padding="dense"
                sortDirection={orderBy === col.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={col.align == 'right' ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === col.id}
                    direction={order}
                    onClick={this.createSortHandler(col.id)}
                  >
                    {col.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected > 0}
              onChange={onSelectAllClick}
            />
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },

});

class OrdersTable extends Component {
  state = {
    order: 'desc',
    orderBy: 'time',
    selected: [],
    data: this.props.orders,
    page: 0,
    rowsPerPage: 5,
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.orders !== this.props.orders){
        this.setState({data:nextProps.orders});
    }
  }
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      const { data } = this.state;
      let selected =[], index = 0;
      for (var i in data) {
        if (typeof data[i].order !== "undefined" ) {
          if( data[i].order.status != markets.OrderStatusCode.OS_CANCELED && data[i].order.status != markets.OrderStatusCode.OS_FILLED ){
            selected[index] = data[i].order.clOrdID;
            index++;
          }
        }
      }
      this.setState({ selected: selected });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    // if order status is filled or canceled
    if( this.state.data[id].order.status == markets.OrderStatusCode.OS_CANCELED || this.state.data[id].order.status == markets.OrderStatusCode.OS_FILLED )
      return

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleCancelOrders = event => {
    const { selected } = this.state;
    const { cancelOrders } = this.props;
    const { orders } = this.props;

    selected.forEach(clOrdID => {
      cancelOrders( orders[clOrdID].order );
    });
    this.setState({ selected: [] });
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  getProtoOptionKey = ( option_name, srch_value ) => {
    let arrOptions = markets[option_name]
    for (var key in arrOptions ){
      let value = arrOptions[key];
      if ( value == srch_value ){
        return key;
      }
    }
  };

  checkToday = (orderDay) => {

    let day = new Date(orderDay*1000);
    let today = new Date();
    return (day.getFullYear() == today.getFullYear() && day.getMonth() == today.getMonth() && day.getDate() == today.getDate()) ? true : false;
  }

  addOrderToArray = (arr, index, mData) => {

    if (arr[index].timestamp != null) {
      arr[index].time = mData.timestamp.seconds;
    }
    if( typeof mData.cancelStatus !== "undefined" ){
      arr[index].cancelStatus = mData.cancelStatus;
    }
  }

  render() {
    const { classes, marketprops, menus, market } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const Filter = {
      Open: 0,
      Active: 1,
      Today: 2,
    }

    let index = 0, arrOrders=[];
    for (var i in data) {
      if (typeof data[i].order !== "undefined") {

        if (menus[Filter.Open].selected == true && menus[Filter.Today].selected == false && menus[Filter.Active].selected == false) {

          if (data[i].order.status && data[i].order.status == OS_OPEN ) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else if (menus[Filter.Open].selected == true && menus[Filter.Today].selected == true && menus[Filter.Active].selected == false) {
          
          if (data[i].order.status && data[i].order.status == OS_OPEN && data[i].order.timestamp != null && this.checkToday(data[i].order.timestamp.seconds)) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else if (menus[Filter.Open].selected == true && menus[Filter.Today].selected == false && menus[Filter.Active].selected == true) {

          if (data[i].order.status && data[i].order.status == OS_OPEN && data[i].order.market && data[i].order.market == market) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else if (menus[Filter.Active].selected == true && menus[Filter.Open].selected == false && menus[Filter.Today].selected == false) {

          if (data[i].order.market && data[i].order.market == market ) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else if (menus[Filter.Active].selected == true && menus[Filter.Open].selected == false && menus[Filter.Today].selected == true) {

          if (data[i].order.market && data[i].order.market == market && data[i].order.timestamp != null && this.checkToday(data[i].order.timestamp.seconds)) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else if (menus[Filter.Active].selected == true && menus[Filter.Open].selected == true && menus[Filter.Today].selected == false) {

          if (data[i].order.market && data[i].order.market == market && data[i].order.status && data[i].order.status == OS_OPEN) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else if (menus[Filter.Today].selected == true && menus[Filter.Open].selected == false && menus[Filter.Active].selected == false) {

          if (data[i].order.timestamp != null && this.checkToday(data[i].order.timestamp.seconds) ) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }

        } else if (menus[Filter.Today].selected == true && menus[Filter.Open].selected == false && menus[Filter.Active].selected == true) {

          if (data[i].order.market && data[i].order.market == market && data[i].order.timestamp != null && this.checkToday(data[i].order.timestamp.seconds) ) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else if (menus[Filter.Today].selected == true && menus[Filter.Open].selected == true && menus[Filter.Active].selected == true) {

          if (data[i].order.status && data[i].order.status == OS_OPEN && data[i].order.market && data[i].order.market == market && data[i].order.timestamp != null && this.checkToday(data[i].order.timestamp.seconds) ) {
            arrOrders[index] = data[i].order;
            this.addOrderToArray(arrOrders, index, data[i].order)
            index++;
          }
        } else {
          arrOrders[index] = data[i].order;
          this.addOrderToArray(arrOrders, index, data[i].order)
          index++;
        }
      }
    }

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar selected={selected} cancelOrders={this.handleCancelOrders} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle" padding="dense">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={arrOrders.length}
            />
            <TableBody>
              {stableSort(arrOrders, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n, index) => {

                  n.id = n.clOrdID;

                  const isSelected = this.isSelected(n.id);
		              const market = marketprops[n.market];
                  const buy = n.side == markets.Side.BUY ? n.quantity : null;
                  const sell = n.side == markets.Side.SELL ? n.quantity : null;
                  const total = n.filledCost ? n.filledCost : 0;
                  const filled = n.filled ? n.filled : 0;
                  const remaining = n.quantity - n.filled;
                  const avgfillprice = n.filled == 0 ? 0 : (10** (market? market.base_asset.decimals : 0 ) * n.filledCost / n.filled).toFixed((market? market.base_asset.decimals : 0 ));
                  const type = this.getProtoOptionKey('OrderType', n.orderType);
                  let status = n.status ? orderStatusCodeLabel(n.status) : null;
                  if (n.status == markets.OrderStatusCode.OS_PARTIAL_FILL) {
                    var percent = (n.filled / n.quantity * 100).toFixed(0);
                    status = percent + "%";
                  }
                  if( typeof n.cancelStatus !== "undefined" && n.status != markets.OrderStatusCode.OS_CANCELED )
                  {
                    let cancelStatus = " CANCEL " + cancelStatusCodeLabel( n.cancelStatus.code );
                    status = status + cancelStatus;
                  }

                  let date
                  if(n.timestamp){
                    date = new Date()
                    date.setTime(n.timestamp.seconds * 1000)
                    date = moment(date).format('YYYY-MM-DD HH:mm:ss')
                  }

                  return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                      <TableCell padding="dense">{date}</TableCell>
                      <TableCell component="th" scope="row" padding="dense">
                        {n.market}
                      </TableCell>
                      <TableCell align="right" padding="dense">{formatQty(market, buy)}</TableCell>
                      <TableCell align="right" padding="dense">{formatQty(market, sell)}</TableCell>
                      <TableCell align="right" padding="dense">{formatPrice(market, n.price)}</TableCell>
                      <TableCell align="right" padding="dense">{formatQty(market, filled)}</TableCell>
                      <TableCell align="right" padding="dense">{formatQty(market, remaining)}</TableCell>
                      <TableCell align="right" padding="dense">{formatPrice(market, total)}</TableCell>
                      <TableCell align="right" padding="dense">{formatPrice(market, avgfillprice)}</TableCell>
                      <TableCell padding="dense">{type}</TableCell>
                      <TableCell padding="dense">{status}</TableCell>
                      <TableCell padding="checkbox">
                        { n.status == markets.OrderStatusCode.OS_CANCELED || n.status == markets.OrderStatusCode.OS_FILLED || typeof n.cancelStatus !== "undefined" ? null :
                          ( <Checkbox checked={isSelected} /> ) // hide checkbox for hilled and canceled
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }} padding="dense">
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={arrOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

OrdersTable.propTypes = {
  classes: PropTypes.object.isRequired,
  cancelOrders: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  orders: state.orders,
  marketprops: state.marketprops,
  market: state.view.market,
  menus: state.filterMenus.menus,
})

const mapDispatchToProps = dispatch => ({
  cancelOrders: order => dispatch(ORDERS_CANCEL_(order))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(OrdersTable));
