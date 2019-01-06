/*
 * view.py
 *
 * A store for user-driven state used by views.
 *
 */

import { distinctUntilChanged, map, pairwise, pluck, switchMap, take, mapTo, filter } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { MD_SUBSCRIBE_, MD_UNSUBSCRIBE_ } from './md'
import { SESSION_FETCHED } from './session';

// action types
export const VIEW_SET_MARKET = 'VIEW:SET_MARKET'
export const VIEW_POPULATE_TICKET = 'VIEW:POPULATE_TICKET'
export const VIEW_CLEAR_TICKET = 'VIEW:CLEAR_TICKET'

// action creators

export const VIEW_SET_MARKET_ = market =>
  ({ type: VIEW_SET_MARKET, market })
export const VIEW_POPULATE_TICKET_ = pick =>
  ({ type: VIEW_POPULATE_TICKET, pick })
export const VIEW_CLEAR_TICKET_ = () =>
  ({ type: VIEW_CLEAR_TICKET })

const INITIAL_STATE = {
  market: null,
  pick: null,
}

// reducer
export const view = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state
  case VIEW_SET_MARKET:
    return {
      ...state,
      market: action.market,
      old_market: state.market,
      pick: null
    }
  case VIEW_POPULATE_TICKET:
    return { ...state, pick: action.pick }
  case VIEW_CLEAR_TICKET:
    return { ...state, pick: null }
  }
}

export const epics = [

  // set active market
  //
  action$ => action$.pipe(
    ofType(SESSION_FETCHED),
    filter(action => action.session.isAuthorized),
    take(1),
    mapTo(VIEW_SET_MARKET_("LUS|LAR"))),

  // sub/unsubscribe when view changes the active market
  //
  (action$, state$) => action$.pipe(
    ofType(VIEW_SET_MARKET),
    take(1),
    map(action =>
      MD_SUBSCRIBE_('trades', action.market))),

  (action$, state$) => action$.pipe(
    ofType(VIEW_SET_MARKET),
    pluck('market'),
    distinctUntilChanged(),
    pairwise(),
    switchMap(markets => [
      MD_UNSUBSCRIBE_('trades', markets[0]),
      MD_SUBSCRIBE_('trades', markets[1])])),

]
