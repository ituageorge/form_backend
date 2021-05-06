var express = require('express');
var app = express();


// var router = express.Router();
var mongoose = require('mongoose');
const config = require('./config.json');
const User = require('./model/userModel')

const routes = require('./route/userRoute')
// require('dotenv/config');

var port = 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", routes);


// connect to Mongodb
mongoose
  .connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB ...');
  })
  .catch(err => {
    console.error('Could not Connect to MongoDb !!!', err);
  });

  
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
