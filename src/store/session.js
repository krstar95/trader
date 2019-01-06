import { ofType } from 'redux-observable'
import { map, mapTo, merge, switchMap, catchError } from 'rxjs/operators'
import { interval, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { decodeProtobuf } from '../utils/utils'
import { markets } from '../protobufs'

// action types
//
export const SESSION_FETCH = 'SESSION:FETCH'
export const SESSION_FETCHED = 'SESSION:FETCHED'

// action creators
//
export const SESSION_FETCH_ = () =>
  ({ type: SESSION_FETCH })
export const SESSION_FETCHED_ = session =>
  ({ type: SESSION_FETCHED, session })

export const reduce = (state = new markets.AuthInfo({isAuthorized: false}), action) => {
  switch (action.type) {
  default:
    return state
  case SESSION_FETCHED:
    return action.session
  }
}

function determine_host(host) {
  if (host == 'ORIGIN') {
    return window.location.hostname;
  }
  else {
    return host;
  }
}

function determine_port(port, local_default) {
  if (port == 'ORIGIN') {
    if (window.location.hostname == 'localhost') {
      return local_default;
    }
    else if (window.location.port == '') {
      return window.location.protocol == 'https:' ? '443' : '80';
    }
    else {
      return window.location.port;
    }
  }
  else {
    return port;
  }
}

const bake = info => {
  info.mqttHost = determine_host(info.mqttHost)
  info.mqttPort = determine_port(info.mqttPort, 15675)
  info.mdsHost = determine_host(info.mdsHost)
  info.mdsPort = determine_port(info.mdsPort, 8765)
  return info
}

export const epics = [

  // ignition...
  //
  () =>
    of(SESSION_FETCH_()).pipe(
      merge(
        interval(5 * 60 * 1000).pipe(
          mapTo(SESSION_FETCH_())))),

  action$ => action$.pipe(
    ofType(SESSION_FETCH),
    switchMap(() =>
	    ajax.getJSON('/api/auth-info/').pipe(
        map(response => SESSION_FETCHED_(bake(decodeProtobuf(markets.AuthInfo, response)))),
        catchError(() => of(SESSION_FETCHED_(new markets.AuthInfo({isAuthorized: false}))))))),
]
