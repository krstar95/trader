import React, { PureComponent } from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { FormGroup } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { markets as pb } from '../../protobufs'
import EnhancedOrderForm from './EnhancedForm'
import OrderTypeSelector from './OrderTypeSelector'
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { pv2f, sv2f } from '../../utils/utils'

const styles = theme => ({
  root: {
    height: '100%',
  },
  group:{
    marginRight: "24px",
    paddingLeft: "16px",
  },
  noPadding:{
    paddingLeft:"0px"
  }
})

const blank = () => ({
  limit: '',
  quantity: '',
  stop: ''
})

class OrderFormContainer extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      pick: props.pick,
      orderType: pb.OrderType.GTC,
      buy: blank(),
      sell: blank()
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.pick === null || props.pick === state.pick) {
      return null
    }

    let newState = {
      pick: props.pick,
      orderType: props.pick.orderType,
      buy: blank(),
      sell: blank(),
    }

    if (props.pick.buy) {
      if (props.pick.buy.px) {
        newState.buy.limit = pv2f(props.pick.buy.px, props.pick.market)
      }
      if (props.pick.buy.qty) {
        newState.buy.quantity = sv2f(props.pick.buy.qty, props.pick.market)
      }
    }

    if (props.pick.sell) {
      if (props.pick.sell.px) {
        newState.sell.limit = pv2f(props.pick.sell.px, props.pick.market)
      }
      if (props.pick.sell.qty) {
        newState.sell.quantity = sv2f(props.pick.sell.qty, props.pick.market)
      }
    }

    return newState
  }

  handleOrderTypeChange = (orderType) => {
    this.setState({ orderType })
  }

  render() {
    const { classes, market, wallets } = this.props

    let base_symbol = market ? market.base_symbol : ""
    let quote_symbol = market ? market.quote_symbol : ""

    let available_base = wallets.getIn([base_symbol, 'available'], 0)
    let available_quote = wallets.getIn([quote_symbol, 'available'], 0)

    return (
      <Card className={classes.root}>
        <FormGroup className={classes.group}>
          <Grid container spacing={24} direction="row">
            <Grid item sm={6}>
              <CardHeader
                className={classes.noPadding}
                title="Order Ticket" />
            </Grid>
            <Grid item sm={6} className="no-drag">
              <OrderTypeSelector
                orderType={this.state.orderType}
                onChange={this.handleOrderTypeChange}/>
            </Grid>
          </Grid>
        </FormGroup>

        <CardContent style={{paddingTop: 0}}>
            <Grid container className="no-drag" direction="row" spacing={24} alignItems="center">

              <Grid item xs={6}>
                <EnhancedOrderForm
                  session={this.props.session}
                  market={market}
                  dispatch={this.props.dispatch}
                  initial={this.state.buy}
                  side={pb.Side.BUY}
                  orderType={this.state.orderType}
                  marketOrder={null}
                  available_base={available_base}
                  available_quote={available_quote}/>
              </Grid>

              <Grid item xs={6}>
                <EnhancedOrderForm
                  session={this.props.session}
                  market={market}
                  dispatch={this.props.dispatch}
                  initial={this.state.sell}
                  side={pb.Side.SELL}
                  orderType={this.state.orderType}
                  marketOrder={null}
                  available_base={available_base}
                  available_quote={available_quote} />
              </Grid>
            </Grid>

        </CardContent>
      </Card>
    )
  }
}

OrderFormContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  session: state.session,
  market: state.marketprops[state.view.market],
  wallets: state.wallets,
  pick: state.view.pick,
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(OrderFormContainer)
