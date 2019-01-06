import { webSocket } from 'rxjs/webSocket'
import { filter, map, takeUntil, mergeMap, delay } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { ofType } from 'redux-observable'
import { markets as pb } from '../protobufs'
import { List } from 'immutable'

export const MD_SUBSCRIBE = 'MD:SUBSCRIBE'
export const MD_UNSUBSCRIBE = 'MD:UNSUBSCRIBE'
export const MD_UPDATE = 'MD:UPDATE'

export const MD_SUBSCRIBE_ = (aggregation, topic) =>
  ({ type: MD_SUBSCRIBE, aggregation, topic })
export const MD_UNSUBSCRIBE_ = (aggregation, topic) =>
  ({ type: MD_UNSUBSCRIBE, aggregation, topic })
export const MD_UPDATE_ = continuum =>
  ({ type: MD_UPDATE, continuum })

const INITIAL_STATE = {
  trades: {},
  dailies: {},
}

const continuumReduce = {
  trades: (continuum, trades) => {
    if (continuum.trade) {
      // TODO: compare timestamp and eliminate duplicates
      return trades.push(continuum.trade)
    }
    else if (continuum.segment) {
      // TODO: range update/insert
      return List(continuum.segment.trades.trades)
    }
    else {
      // should never get here
      console.warn(`ignoring unrecognized continuum for topic ${continuum.topic}`)
      return trades
    }
  },
  dailies: (continuum, dailies) => {
    // TODO: pb defs, server support, and this reducer
    return dailies
  }
}

const update = (continuum, state) => {
  let [aggregation, market] = continuum.topic.split('/')
  let markets = state[aggregation]
  return {
    ...state,
    [aggregation]: {
      ...markets,
      [market]: continuumReduce[aggregation](continuum, markets[market])
    }
  }
}

export const reduce = (state=INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state
  case MD_UPDATE:
    return update(action.continuum, state)
  }
}

let md$ = null
const webSocketOpen$ = new Subject()
const webSocketClosing$ = new Subject()
const webSocketClose$ = new Subject() 
const PLEX = {}

const plexOf = (session, topic) => {
  if (!md$) {
    md$ = webSocket({
      url: `ws://${session.mdsHost}:${session.mdsPort}/md`,
      binaryType: 'arraybuffer',
      serializer: request => request,
      deserializer: message => pb.Continuum.decode(new Uint8Array(message.data)),
      openObserver: webSocketOpen$,
      closingObserver: webSocketClosing$,
      closeObserver: webSocketClose$,
    })
  }
  let plex = PLEX[topic]
  if (plex === undefined) {
    plex = md$.multiplex(() => `+/${topic}`,
                         () => `-/${topic}`,
                         m => m.topic === topic)
    PLEX[topic] = plex
  }
  return plex
}

export const epics = [

  // market data sub/unsub lifetime
  //
  (action$, state$) => action$.pipe(
    ofType(MD_SUBSCRIBE),
    mergeMap(sub =>
      plexOf(state$.value.session, `${sub.aggregation}/${sub.topic}`).pipe(
        map(continuum =>
          MD_UPDATE_(continuum)),
        takeUntil(action$.pipe(
          ofType(MD_UNSUBSCRIBE),
          filter(unsub => unsub.topic === sub.topic),
          delay(250)))))), // to prevent rapid md$ disconnect/reconnect

  (action$, state$) => webSocketOpen$.pipe(
    map((event) => ({
      type: 'SOCKET_OPEN_EVENT'
    }))),

  (action$, state$) => webSocketClosing$.pipe(
    map(() => ({
      type: 'SOCKET_CLOSING_EVENT'
    }))),

  (action$, state$) => webSocketClose$.pipe(
    map((event) => ({
      type: 'SOCKET_CLOSE_EVENT',
      wasClean: event.wasClean,
      code: event.code,
      reason: event.reason
    }))),
]
