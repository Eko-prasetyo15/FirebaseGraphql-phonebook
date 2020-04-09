var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require("firebase");
const graphqlHTTP = require("express-graphql");
const cors = require('cors');



const config = {
    apiKey: "AIzaSyDcsAkoj2BOwuArzno71KD88cW81VDO5Co",
    authDomain: "phonebook-70ac9.firebaseapp.com",
    databaseURL: "https://phonebook-70ac9.firebaseio.com/",
    projectId: "phonebook-70ac9",
    storageBucket: "phonebook-70ac9.appspot.com",
    messagingSenderId: "1088860697606"
  };

firebase.initializeApp(config);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

const userSchema = require('./graphql').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));

module.exports = app;
