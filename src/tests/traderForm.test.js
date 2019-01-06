import React from 'react'
import EnhancedOrderForm from '../components/order/EnhancedForm'
import { markets as markets_api } from './fixtures/markets'
import { markets } from '../protobufs'
import { createMount } from '@material-ui/core/test-utils';

describe('OrderForm', () => {

  let mount
  let BUY
  let SELL

  beforeEach(() => {
    mount = createMount();
    BUY = markets.Side.BUY
    SELL = markets.Side.SELL

  });

  it('buttons disabled without data', () => {

    var market = markets[0]

    var orderForm = <EnhancedOrderForm  market={market} side_buy={BUY}
                      side_sell={SELL}
                      markets={markets}
                      dispatch={() => {console.log('a')}}
                      handleToggleOrder={() => {console.log('a')}}
                      orderType={1}
                      marketOder={true} />

    const wrapper = mount(orderForm)


    const button_buy = wrapper.find("#buy").first()
    const button_sell = wrapper.find("#sell").first()
    expect(
       button_buy.props().disabled
    ).toBe(true)

    expect(
       button_sell.props().disabled
    ).toBe(true)
  });


  it("total should match price * quantity" , () =>{

    var market = markets[0] #// LBTC/LUS
    var available = 200

    var orderForm = <EnhancedOrderForm  market={market} side_buy={BUY}
                      side_sell={SELL}
                      markets={markets}
                      dispatch={() => {console.log('a')}}
                      handleToggleOrder={() => {console.log('a')}}
                      orderType={1}
                      marketOder={true} />

    const wrapper = mount(orderForm)

    const label_total = wrapper.find(".total").first()

    expect(

    )


  })


});
