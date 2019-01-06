import { markets as pb } from '../protobufs'
import { ofType } from 'redux-observable'
import { map, mergeMap, filter, take } from 'rxjs/operators'
import { MQTT_CONNECTED, MQTT_RX, MQTT_SUBSCRIBE_ } from './mqtt'
import { ajax } from 'rxjs/ajax'
import {decodeProtobuf} from '../utils/utils'
import { SESSION_FETCHED } from './session';
import { Map } from 'immutable'

// action types
//
export const WALLETS_FETCHED = 'WALLETS:FETCHED'
export const WALLETS_POSITION_CHANGE = "WALLETS:POSITION_CHANGE"

// action creators
//
export const WALLETS_FETCHED_ = pocket =>
  ({ type: WALLETS_FETCHED, pocket })
export const WALLETS_POSITION_CHANGE_ = (asset, position) =>
  ({ type: WALLETS_POSITION_CHANGE, asset, position })

// reducer
//

const zero = x => x ? x : 0
const bake = position => (
  { 
    available: zero(position.available), 
    open: zero(position.open), 
    pending: zero(position.pending)
  }
)

export const reduce = (state = Map(), action) => {
  switch (action.type) {
  default:
    return state
  case WALLETS_FETCHED:
    return action.pocket.wallets.reduce((acc, w) => acc.set(w.asset, bake(w.position)), state)
  case WALLETS_POSITION_CHANGE:
    return state.set(action.asset, {...pb.Position.toObject(action.position)})
  }
}

// epics
//
export const epics = [

  // Fetch initial pocket positions.
  //
  action$ => action$.pipe(
    ofType(SESSION_FETCHED),
    filter(action => action.session.isAuthorized),
    take(1),
    mergeMap(action =>
	    ajax.getJSON('/api/pockets/').pipe(
        map(response =>
          WALLETS_FETCHED_(decodeProtobuf(pb.Pocket, response)))))),
  
  // subscribe to position changes
  //
  (action$, state$) => action$.pipe(
    ofType(MQTT_CONNECTED),
    map(() => MQTT_SUBSCRIBE_(`position/${state$.value.session.pocketID}/+`))),

  // handle position update
  //
  action$ => action$.pipe(
    ofType(MQTT_RX),
    filter(action =>
	   action.topic[0] == 'position'),
    map(action =>
	    WALLETS_POSITION_CHANGE_(action.topic[2], pb.Position.decode(action.message)))),

]
