const config = require("../env.config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = require("../app");
const SecurityRouter = require("../routes/auth");
const IdentityRouter = require("../routes/users");
var mqtt = require("mqtt");
var debug = require("debug")("node-express-generator:server");
var http = require("http"); // http
const tls = require("spdy"); //http2 + https (tls)
const fs = require("fs");
let helmet = require("helmet");

config.initRefreshSecret();

mongoose.connect(
  "mongodb://"+config.mongoDBhost+":"+config.mongoDBport+"/"+config.mongoDbCollection,
  { useNewUrlParser: true }
);

const options = {
  key: fs.readFileSync("./tls/test-key.pem"),
  cert: fs.readFileSync("./tls/test-cert.pem")
};
SecurityRouter.routesConfig(app);
IdentityRouter.routesConfig(app);


app.use(helmet());

app.use(bodyParser.json());

var port = normalizePort(process.env.PORT || config.httpport);
app.set("port", port);

var https = tls.createServer(options, app).listen(config.httpsport, error => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log(
      "Express Sever Configured with HTTP2 and TLSv1.2 and listening on port: " +
        config.httpsport +
        "."
    );
  }
});

/**
 * Create HTTP server.
 */

var server = http.createServer(app,(error)=>{
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log(
      "Express Sever Configured with HTTP and listening on port: " +
        config.httpport +
        "."
    );
  }
});

//////////////////////////////////////////////////////////////////
var optionsmqtt = {
  port: 1883,
  host: "mqtt://127.0.0.1",
  clientId: "mqttjs_",
  /* Math.random()
      .toString(16)
      .substr(2, 8) */ keepalive: 1020,
  reconnectPeriod: 1000,
  protocolId: "MQIsdp",
  protocolVersion: 3,
  clean: true,
  encoding: "utf8"
};

io = require("socket.io")(https, {
  origins: "*:*"
});
var client = mqtt.connect(
  "mqtt://127.0.0.1",
  optionsmqtt
);

/**
 * Listen on provided port, on all network interfaces.
 */

client.on("message", function(topic, payload) {
 
  io.sockets.emit(String(topic), {
    topic: String(topic),
    payload: String(payload)
  });
  
});

 io.on("connect", () => {
  console.log("A User  connected");
}); 

client.on("connect", function() {

  console.log("connected to the broker");

  client.subscribe(["home_1", "home_2"], function() {
  
  });
});


server.listen(port,(err) => {
  if (err)
  {
    console.error(error);
    return process.exit(1);
  }
  else 
  {
    console.log("listening on a HTTP server on port", config.httpport);

  }
});
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

//

//server = require('http').createServer(app);

// create a socket object that listens on port 5000
//var io = require('socket.io').listen(server);

// create an mqtt client object and connect to the mqtt broker

/* io.sockets.on('connection', function (socket) {
        console.log('hi');
        // socket connection indicates what mqtt topic to subscribe to in data.topic
        socket.on('subscribe', function (data) {
            console.log('Subscribing to '+data.topic);
            socket.join(data.topic);
            client.subscribe(data.topic);
        });
        // when socket connection publishes a message, forward that message
        // the the mqtt broker
        socket.on('publish', function (data) {
            console.log('Publishing to '+data.topic);
            client.publish(data.topic,data.payload);
        });
    }); */

// listen to messages coming from the mqtt broker
