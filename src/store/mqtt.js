import { ofType } from 'redux-observable'
import { tap, ignoreElements, filter, delay, take } from 'rxjs/operators'
import { store } from '../index'
import mqtt from 'mqtt'
import { SESSION_FETCHED } from './session'

// action types
//
export const MQTT_CONNECT_FAILED = 'MQTT:CONNECT_FAILED'
export const MQTT_CONNECTED = 'MQTT:CONNECTED'
export const MQTT_RECONNECT = 'MQTT:RECONNECT'
export const MQTT_CONNECTION_ENDED = 'MQTT:CONNECTION_ENDED'
export const MQTT_RX = 'MQTT:RX'
export const MQTT_SUBSCRIBE = 'MQTT:SUBSCRIBE'
export const MQTT_SEND = 'MQTT:SEND'
export const MQTT_SEND_FAILED = 'MQTT:SEND_FAILED'

// action creators
//
export const MQTT_CONNECT_FAILED_ = error =>
  ({ type: MQTT_CONNECT_FAILED, error })
export const MQTT_CONNECTED_ = client =>
  ({ type: MQTT_CONNECTED, client })
export const MQTT_RECONNECT_ = client =>
  ({ type: MQTT_RECONNECT, client })
export const MQTT_CONNECTION_ENDED_ = () =>
  ({ type: MQTT_CONNECTION_ENDED })
export const MQTT_SUBSCRIBE_ = topic =>
  ({ type: MQTT_SUBSCRIBE, topic })
export const MQTT_RX_ = (topic, message) =>
  ({ type: MQTT_RX, topic, message })
export const MQTT_SEND_ = (topic, message) =>
  ({ type: MQTT_SEND, topic, message })

// initial state
//
const MQTT_INITIAL_STATE = {
  client: null,
  isConnected: false,
  messagesReceived: 0,
  messagesSent: 0
}

export const reduce = (state = MQTT_INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state
  case MQTT_CONNECTED:
    return {
      ...state,
      client: action.client,
      isConnected: true,
    }
  case MQTT_RECONNECT:
    return {
      ...state,
      isConnected: false,
    }
  case MQTT_CONNECTION_ENDED:
    return {
      ...state,
      client: null,
      isConnected: false,
    }
  case MQTT_RX:
    return {
      ...state,
      messagesReceived: 1 + state.messagesReceived
    }
  case MQTT_SEND:
    return {
      ...state,
      messagesSent: 1 + state.messagesSent
    }
  }
}

// epics
//
export const epics = [

  // create mqtt client and try to connect
  //
  action$ => action$.pipe(
    ofType(SESSION_FETCHED),
    filter(action => action.session.isAuthorized),
    take(1),
    tap(action => connect(action.session)),
    ignoreElements()),

  // retry creating mqtt and connecting if it failed
  //
  (action$, state$) => action$.pipe(
    ofType(MQTT_CONNECT_FAILED),
    delay(5000),
    tap(action => connect(state$.value.session)),
    ignoreElements()),

  // subscription
  //
  (action$, state$) => action$.pipe(
    ofType(MQTT_SUBSCRIBE),
    // TBD: handle !isConnected
    tap(action => state$.value.mqtt.client.subscribe(action.topic)),
    // TBD: handle error
    ignoreElements()
  ),

  // send
  //
  (action$, state$) => action$.pipe(
    ofType(MQTT_SEND),
    // TBD: handle !isConnected
    tap(action => state$.value.mqtt.client.publish(action.topic, action.message)),
    // TBD: handle error
    ignoreElements()
  )
]

const connect = session => {
  console.log('creating new mqtt client')
  const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
  const client = mqtt.connect(
    `${protocol}://${session.mqttHost}:${session.mqttPort}/ws`, {
    username: String(session.userID),
    password: session.jwt,
    queueQoSZero: false, // important to avoid placing stale order on slow reconnect
    keepalive: 30, // important
  })
  client.on('connect', () => {
    store.dispatch(MQTT_CONNECTED_(client))
  })
  client.on('message', (topic, message) => {
    store.dispatch(MQTT_RX_(topic.split('/'), message))
  })
  client.on('reconnect', () => {
    store.dispatch(MQTT_RECONNECT_())
  })
  client.on('error', error => {
    store.dispatch(MQTT_CONNECT_FAILED_(error))
  })
}
