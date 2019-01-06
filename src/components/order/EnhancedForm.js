import React, { Component } from 'react'
import { withFormik } from 'formik'
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { markets as pb } from '../../protobufs'
import classNames from 'classnames';
import { ORDERS_NEW_ } from '../../store/orders'
import { assetDecimalRegex } from '../utils/utils.js'
import * as Yup from 'yup'
import { Big } from 'big.js'
Big.DP = 8

const styles = theme => ({

  typography:{
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },

  button:{
    fontWeight:" bold",
    fontSize:"16px",
    padding:"10px"
  },

  total:{
    textAlign:"left"
  },

  buttons:{
    marginTop:"10px"
  },

  hide:{
    visibility:"hidden"
  },

  disabled_buy:{
    '&:disabled':{
        opacity:0.3,
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.secondary.main
    }
  },

  disabled_sell:{
    '&:disabled':{
        opacity:0.3,
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.primary.main
    }
  },
})

class OrderForm extends Component {

  constructor() {
    super()
    this.onFieldChange = this.handleChange.bind(this)
  }

  handleChange(event, decimals){
    let regex = assetDecimalRegex(decimals)
    let value = event.target.value

    if(value[0] == ".")
      value = "0"+value

    if(value){
      while(value.length  && !value.match(regex)){
        value = value.slice(0, -1)
      }

    }
    this.props.setFieldValue(event.target.id, value)
  }

  componentWillReceiveProps(props) {
    if (this.props.initial.limit != props.initial.limit) {
      this.props.setFieldValue('limit', props.initial.limit, true)
    }
    if (this.props.initial.quantity != props.initial.quantity) {
      this.props.setFieldValue('quantity', props.initial.quantity, true)
    }
    if (this.props.initial.stop != props.initial.stop) {
      this.props.setFieldValue('stop', props.initial.stop, true)
    }

    if (this.props.orderType != props.orderType) {
      if (this.props.values.limit && this.props.values.quantity) {
        this.props.validateForm()
      }
    }

    if (this.props.market != props.market) {
      this.props.resetForm({
        limit: '',
        quantity: '',
        stop: ''
      })
    }
  }

  render(){

    const {
      classes,
      dirty,
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue,
      touched,
      side,
      market,
      marketOrder,
      orderType,
      available_base,
      available_quote
    } = this.props

    Big.NE = -11

    let quote_symbol = market ? market.quote_symbol : ""
    let base_symbol = market ? market.base_symbol : ""

    let stop_hide = orderType != pb.OrderType.STOP ? classes.hide  : ""

    let available_q = Big(0)
    let available_b = Big(0)
    let total = Big(0)

    if(market){
      available_b = Big(available_base).div(10**market.base_asset.decimals)
      available_q = Big(available_quote).div(10**market.quote_asset.decimals)
    }

    let buy_sell_disabled = true
    if( (!errors.limit && !errors.quantity) && (values.limit && values.quantity)){
      total = Big(values.limit).times(values.quantity)

       if(pb.Side.BUY == side && total.lt(available_q)){
         buy_sell_disabled = false
       }
       if(pb.Side.SELL == side && Big(values.quantity).lte(available_b)){
          buy_sell_disabled = false
       }

    }

    total = total.toString()

    return (
      <React.Fragment>
        <form onSubmit={ handleSubmit } autoComplete="off">
          <Grid container className="no-drag" spacing={8} direction='column' alignItems="center">

            <Grid item xs={12}>
              <TextField
                  id="available"
                  label="Available"
                  onChange={ handleChange }
                  value={pb.Side.SELL == side ? available_b.toString() : available_q.toString()}
                  type="text"
                  className={ classes.textField }
                  InputProps={{ endAdornment: <InputAdornment position="end">{ pb.Side.SELL == side ? base_symbol : quote_symbol }</InputAdornment> ,
                                disableUnderline:true}}
                  margin="dense"
                  disabled={true}
                  fullWidth={true} />

              <TextField
                  id="limit"
                  label="Limit Price"
                  onChange={ (event) => this.onFieldChange(event, market.quote_asset.decimals) }
                  value={values.limit}
                  error={ touched.limit && !!errors.limit }
                  type="number"
                  className={ classes.textField }
                  InputProps={{ endAdornment: <InputAdornment position="end">{ quote_symbol }</InputAdornment> }}
                  margin="dense"
                  disabled={marketOrder}
                  fullWidth={true} />

              <TextField
                  id="quantity"
                  label="Quantity"
                  onChange={ (event) => this.onFieldChange(event, market.base_asset.decimals) }
                  value={values.quantity}
                  error={ touched.quantity && !!errors.quantity }
                  type="number"
                  className={ classes.textField }
                  InputProps={{ endAdornment: <InputAdornment position="end">{ base_symbol }</InputAdornment> }}
                  margin="dense"
                  fullWidth={true} />

              <TextField
                  id="stop"
                  label="Stop"
                  onChange={ (event) => this.onFieldChange(event, market.quote_asset.decimals) }
                  value={values.stop}
                  error={ touched.stop && !!errors.stop }
                  type="number"
                  className={classNames(classes.textField, stop_hide) }
                  InputProps={{ endAdornment: <InputAdornment position="end">{ quote_symbol }</InputAdornment> }}
                  margin="dense"
                  disabled={orderType != pb.OrderType.STOP}
                  fullWidth={true}/>

              <TextField
                  id="total"
                  label={pb.Side.BUY == side ? "Total Cost" : "Total Recieved"}
                  onChange={ handleChange }
                  value={ total }
                  type="text"
                  className={ classes.textField }
                  InputProps={{ endAdornment: <InputAdornment position="end">{ quote_symbol }</InputAdornment>,
                                disableUnderline:true }}
                  margin="dense"
                  disabled={true}
                  fullWidth={true} />

              </Grid>
              </Grid>

              <Grid container className="no-drag" spacing={8} direction='row' alignItems="center">

                <Grid item xs={12}>
                  <Button
                      className={pb.Side.SELL == side ? classes.disabled_sell : classes.disabled_buy}
                      variant="contained"
                      size="large"
                      color={pb.Side.SELL == side ? 'primary' : "secondary"}
                      fullWidth={true}
                      disabled={buy_sell_disabled}
                      onClick={this.props.submitForm}
                      id="buy"
                      >
                      <Typography className={classNames(classes.textField, classes.button)}>
                        {pb.Side.SELL == side ? 'SELL' : "BUY"}<br/>{base_symbol}
                      </Typography>
                  </Button>
                </Grid>

          </Grid>
        </form>
      </React.Fragment>
    )
  }
}

const formik = {
  mapPropsToValues: props => props.initial,

  validationSchema: ({market, marketOrder, orderType}) => {

    let limit = Yup.number()
      .typeError('Enter a number')
      .positive('Enter a positive number')
      .min(Big(1)
      .div(Big(10**market.quote_asset.decimals))
      .toFixed(market.quote_asset.decimals),
      'Enter a number greater than ${min}')

    let stop = Yup.number()
      .typeError('Enter a number')
      .positive('Enter a positive number')
      .min(Big(1)
      .div(Big(10**market.quote_asset.decimals))
      .toFixed(market.quote_asset.decimals),
      'Enter a number greater than ${min}')

    if(!marketOrder){
      limit = limit.required()
    }

    if(orderType == pb.OrderType.STOP){
      stop = stop.required()
    }

    let schema = Yup.object().shape({
      limit: limit,

      quantity: Yup.number()
        .required('Field required!')
        .typeError('Enter a number')
        .min(Big(1)
        .div(Big(10**market.base_asset.decimals))
        .toFixed(market.base_asset.decimals),
        'Enter a number greater than ${min}'),

      stop: stop,
    })

    return schema
  },

  handleSubmit: (values, { resetForm, props }) => {
    let market = props.market
    let limit = Math.round(values.limit * 10**market.quote_asset.decimals)
    let quantity = Math.round(values.quantity * 10**market.base_asset.decimals)
    let stop = Math.round(values.stop * 10 ** market.quote_asset.decimals)
    let marketOrder = props.marketOrder

    limit = !marketOrder ? limit : null

    if(props.orderType != pb.OrderType.STOP)
        stop = null

    props.dispatch(
      ORDERS_NEW_(
        props.session.userID,
        props.session.profileID,
        props.session.pocketID,
        props.market.symbol,
        props.side,
        props.orderType,
        limit,
        quantity,
        stop
      )
    )
    resetForm({limit:'', quantity:'', stop:''})
  },

  displayName: 'BasicForm', // helps with React DevTools
}

export default withStyles(styles)(withFormik(formik)(OrderForm))
