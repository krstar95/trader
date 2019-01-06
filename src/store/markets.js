import { ofType } from 'redux-observable'
import { catchError, take, combineLatest, map, mergeMap, filter } from 'rxjs/operators'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { MQTT_CONNECTED, MQTT_RX, MQTT_SUBSCRIBE_ } from './mqtt'
import { markets as market } from '../protobufs'
import { decodeProtobuf } from '../utils/utils'
import { SESSION_FETCHED } from './session';

// action types
export const MARKETS_FETCH = 'MARKETS:FETCH'
export const MARKETS_FETCHED = 'MARKETS:FETCHED'
export const MARKETS_QUOTE_FETCH = "MARKETS:QUOTE_FETCH"
export const MARKETS_QUOTE_FETCH_ERROR = "MARKETS:QUOTE_FETCH_ERROR"
export const MARKETS_QUOTE = 'MARKETS:QUOTE'


// action creators
export const marketsFetch = () =>
  ({ type: MARKETS_FETCH })
export const marketsFetched = markets =>
  ({ type: MARKETS_FETCHED, markets })
export const MARKETS_QUOTE_FETCH_ = symbol =>
  ({ type: MARKETS_QUOTE_FETCH, symbol })
export const MARKETS_QUOTE_FETCH_ERROR_ = error =>
  ({ type: MARKETS_QUOTE_FETCH_ERROR, error })
export const MARKETS_QUOTE_ = quote =>
  ({ type: MARKETS_QUOTE, quote })


// reducer
export const markets = (state = {}, action) => {
  switch (action.type) {
  default:
    return state
  case MARKETS_FETCHED:
    var newState = {}
    action.markets.map(o =>
		  newState[o.symbol] = {
			  ...o,
			  quote: {}
      }
    )
    return newState
  case MARKETS_QUOTE:
    return {
      ...state,
      [action.quote.symbol]: {
	      ...state[action.quote.symbol],
	      quote: action.quote
      }
    }
  }
}

// epics
export const epics = [

  // fetch markets
  //
  action$ => action$.pipe(
    ofType(SESSION_FETCHED),
    filter(action => action.session.isAuthorized),
    take(1),
    mergeMap(() =>
	    ajax.getJSON('/api/markets/').pipe(
	      map(response => marketsFetched(response))))),

  // subscribe to market quotes
  //
  (action$, state$) => action$.pipe(
    combineLatest(
      action$.pipe(
        ofType(MARKETS_FETCHED),
			  take(1)),
		  action$.pipe(
        ofType(MQTT_CONNECTED),
			  take(1))),
    take(1),
    mergeMap(() =>
	    Object.keys(state$.value.markets).map(subject =>
				MQTT_SUBSCRIBE_(`markets/${subject}`)))),

  // handle market quotes
  //
  action$ => action$.pipe(
    ofType(MQTT_RX),
    filter(action =>
	    action.topic[0] == 'markets'),
    map(action =>
      MARKETS_QUOTE_(market.Summary.decode(action.message)))),

  // dispatch initial fetch of market quotes
  //
  action$ => action$.pipe(
    ofType(MARKETS_FETCHED),
    mergeMap(action =>
	     action.markets.map(m =>
				MARKETS_QUOTE_FETCH_(m.symbol)))),

  // fetch a market quote
  //
  action$ => action$.pipe(
    ofType(MARKETS_QUOTE_FETCH),
    mergeMap(action =>
	     ajax.getJSON(`/api/md/daily?market=${action.symbol}`).pipe(
	       map(response =>
		   MARKETS_QUOTE_(decodeProtobuf(market.Summary, response))),
	       catchError(error =>
			  of(MARKETS_QUOTE_FETCH_ERROR_(error)))))),

]
