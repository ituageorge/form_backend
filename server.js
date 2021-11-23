var express = require('express');
var app = express();
const path = require('path');
// var router = express.Router();
var mongoose = require('mongoose');
require('dotenv').config();

const config = require('./config.json');
// const User = require('./model/userModel')
// require('dotenv/config');

// var port = 3000;
const PORT = process.env.PORT || config.port;

const cors = require('cors');
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

// app.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({ extended: true }));

// connect to Mongodb
mongoose
  .connect(process.env.MONGODB_URI || config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB ...');
  })
  .catch((err) => {
    console.error('Could not Connect to MongoDb !!!', err);
  });

const routes = require('./route/userRoute');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/users', routes);


app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


// if(process.env.NODE_ENV === 'production') {
//   // set static folder
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

app.listen( PORT , () => {
  console.log('Server listening on port ' + PORT);
});


//the code below could replace the heroku-postbuild script tag in the package.json
// "engines": {
//   "node": "14.x",
//   "npm": "6.x"
// }

//1
/*"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false && npm install --prefix client && npm run build --prefix client"*/

//2
//"heroku-postbuild":"cd client && npm install --only=dev && npm install && npm run build"