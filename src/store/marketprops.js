// rarely updated market props

import { MARKETS_FETCHED } from './markets'

export const marketprops = (state = {}, action) => {
  switch (action.type) {
  default:
    return state

  case MARKETS_FETCHED:
    var newState = {}
    action.markets.map(market =>
      newState[market.symbol] = {
        ...market
      }
    )
    return newState
  }
}
