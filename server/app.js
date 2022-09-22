var express = require("express");
var path = require("path");
var logger = require("morgan");


var config = require("./env.config");
const homevalues=require('./routes/homevalues')
const SecurityRouter = require("./routes/auth");
const IdentityRouter = require("./routes/users");

var app = express();

 app.all('*', (req, res, next) => {
  if (req.secure) {
    return next();
  } else {
     res.redirect(
      307,
      "https://" + req.hostname + ":" + config.httpsport + req.url
    ); 
  }
});  
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  whiteList = ["*"];
  res.header("Access-Control-Allow-Origin", whiteList);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.send(200);
  } else {
    return next();
  }
});

SecurityRouter.routesConfig(app);
IdentityRouter.routesConfig(app);
app.use("/values",homevalues);


app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
