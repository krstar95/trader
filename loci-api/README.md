# Loci API

## MQTT over WebSockets

Public Internet clients may use MQTT over WebSockets to communicate with the Loci Ecosystem Services.

### Javascript
Javascript clients have been tested with the Paho MQTT WebSocket client version 3.1.
https://eclipse.org/paho/clients/js/

#### Example Javascript
Include the Paho Javascript library:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
```

In your Javascript code, create a Paho client that connects to `wss://api.getloci.com:443/wss`:

```javascript
var debug = function(){
  if (window.console && console.log && console.log.apply) {
    console.log.apply(console, arguments);
  }
};

var wsbroker = 'api.getloci.com';
var wsport = 443;
var wsuri = '/wss';
var wsclient = 'client_' + parseInt(Math.random() * 100, 10);

var client = new Paho.MQTT.Client(wsbroker, wsport, wsuri, wsclient);

client.onConnectionLost = function (responseObject) {
  debug("CONNECTION LOST - " + responseObject.errorMessage);
};

client.onMessageArrived = function (message) {
  debug("RECEIVE ON " + message.destinationName + " PAYLOAD " + message.payloadString);

  var json = JSON.parse(message.payloadString);
  debug(json);
};

var options = {
  timeout: 3,
  useSSL: true,
  onSuccess: function () {
    debug("CONNECTION SUCCESS");
    client.subscribe('/api/status', {qos: 1});
  },
  onFailure: function (message) {
    debug("CONNECTION FAILURE - " + message.errorMessage);
  },
};

debug("CONNECT TO " + wsbroker + ":" + wsport);
client.connect(options);
 
send = function(data) {
  message = new Paho.MQTT.Message(data);
  message.destinationName = "/api/authenticate";
  client.send(message);
};
```
