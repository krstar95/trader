import { ofType } from 'redux-observable'
import { ignoreElements, tap} from 'rxjs/operators'
import { ORDERS_RX_FILL } from './orders'

let context
let dingBuffer = null
let awBuffer = null

export function initAudioContext() {
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
        loadDingSound('/static/audio/ding.mp3');
        loadAwSound('/static/audio/aw.mp3');
    } catch (e) {
        console.log('Web Audio API is not supported in this browser');
    }
}

function loadDingSound(url, sndBuf) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
            dingBuffer = buffer;
        });
    }
    request.send();
}

function loadAwSound(url, sndBuf) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
            awBuffer = buffer;
        });
    }
    request.send();
}

function playSound(buffer) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
}

function playDing() {
    playSound(dingBuffer);
}

function playAw() {
    playSound(awBuffer);
}

export const epics = [
  // audio alert for fills
  //
  (action$, state$) => action$.pipe(
    ofType(ORDERS_RX_FILL),
    tap(action => playDing()),
    ignoreElements()),
]
