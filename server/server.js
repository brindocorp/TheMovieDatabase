// Create express app
var express = require('express');
var bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const serveless = require('serverless-http');

express.application.prefix = express.Router.prefix = function(path, configure) {
  var router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
};
var app = express();
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const db = require('./database/db');
const {
  PORT,
  NODE_ENV,
  SESS_NAME,
  SESS_LIFETIME,
  SESS_SECRET
} = require('./config/app');

const IN_PROD = NODE_ENV === 'production';

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      maxAge: parseInt(SESS_LIFETIME),
      sameSite: true,
      secure: IN_PROD
    }
  })
);

// Route file
const router = require('./routes/index.js')(app);

// Default response for any other request
app.use(function(req, res) {
  res.status(404);
});

// path must route to lambda
app.use('/.netlify/functions/server', router);

// running the app on netlify serverless
module.exports.handler = serveless(app);

// // Server port
// var HTTP_PORT = PORT || 4000;

// // Start server
// app.listen(HTTP_PORT, () => {
//   console.log('Server running now on port %PORT%'.replace('%PORT%', HTTP_PORT));
// });
