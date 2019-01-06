import { markets } from '../protobufs'
import { ofType } from 'redux-observable'
import { map, mergeMap, take, filter } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ORDERS_RX_FILL } from './orders'
import { decodeProtobuf } from '../utils/utils'
import { SESSION_FETCHED } from './session'

// action types
//
export const FILLS_FETCHED = "FILLS:FETCHED"

// action constructors
//
export const FILLS_FETCHED_ = events =>
  ({type: FILLS_FETCHED, events})

export const reduce = (state = [], action) => {
  switch (action.type) {
  default:
    return state
  case ORDERS_RX_FILL:
    return [
      new markets.FillEvent({
        timestamp: action.fill.event.timestamp,
        market: action.fill.event.market,
        orderID: action.fill.orderID,
        clOrdID: action.fill.clOrdID,
        fill: action.fill.event.fill
      }),
      ...state
    ]
  case FILLS_FETCHED:
    // TODO: Do not overwrite new fills received while fetching history.
    if (state.length) {
      console.error('new fills arrived while waiting for fills to be fetched')
    }
    return action.events.fills
  }
}

export const epics = [

  action$ => action$.pipe(
    ofType(SESSION_FETCHED),
    filter(action => action.session.isAuthorized),
    take(1),
    mergeMap(() =>
      ajax.getJSON("/api/fills/").pipe(
        map(response =>
          FILLS_FETCHED_(decodeProtobuf(markets.FillEventList, response)))))),

]
