import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Responsive, WidthProvider } from 'react-grid-layout'

import ActiveMarketSummary from '../components/ActiveMarketSummary';
import Pocket from '../components/Pocket'
import Orders from '../components/Orders'
import Fills from '../components/Fills'
import Depth from '../components/Depth'
import Trades from '../components/Trades'
import OrderForm from '../components/order/OrderForm'
import QuickBar from '../components/QuickBar'
import Markets from '../components/Markets'
import TabComponent from '../components/utils/TabComponent'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './App.css'

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f34d2f'
    },
    secondary: {
      main: '#4CAF50'
    },
    type: 'dark',
  },
  // typography: {
  //   fontSize: 24
  // }
})

export class Wrapper extends Component {
    render() {
        var that = this;
        var newChildren = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, { width: that.props.style.width,
                height: that.props.style.height})
        });

        return (
            <div {...this.props}>
                {newChildren}
            </div>
        );
    }
}

const ResponsiveGridLayout = WidthProvider(Responsive)

class App extends Component {

  render() {
    let layout = [ //     x     y     width height
      {i: 'markets',      x:0,  y:0,  w:7,  h:13 },
      {i: 'market',       x:7,  y:0,  w:17, h:4  },
      {i: 'pocket',       x:0,  y:8,  w:7,  h:9  },
      {i: 'quickbar',     x:7,  y:4,  w:9,  h:4  },
      {i: 'order-form',   x:7,  y:8,  w:9,  h:14 },
      {i: 'depth',        x:17, y:4,  w:8,  h:4  },
      {i: 'trades',       x:17, y:8,  w:8,  h:14 },
      {i: 'orders-fills', x:0,  y:14, w:24, h:16 },
    ]

    let fillComponent = <Fills key="fills"/>
    let orderComponent = <Orders key="orders"/>
    let tabComponents = [orderComponent, fillComponent]

    return (
      <MuiThemeProvider theme={darkTheme}>
        <div className="App">
          <ResponsiveGridLayout className="layout" layouts={{lg:layout}}
              breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
              rowHeight={24}
              cols={{lg: 24, md: 20, sm: 12, xs: 8, xxs: 4}}
              draggableCancel='.no-drag'>

            <Wrapper key="market"><ActiveMarketSummary /></Wrapper>
            <Wrapper key="markets"><Markets /></Wrapper>
            <Wrapper key="pocket"><Pocket /></Wrapper>
            <Wrapper key="depth"><Depth /></Wrapper>
            <Wrapper key="trades"><Trades /></Wrapper>
            <Wrapper key="quickbar"><QuickBar /></Wrapper>
            <div key="order-form"><OrderForm /></div>
            <Wrapper key="orders-fills"><TabComponent components={tabComponents} labels={["Orders", "Fills"]}/></Wrapper>
          </ResponsiveGridLayout>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
})(App)
