'use strict';

var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost:27017/personal-api");

var db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection error: ', err);
});

db.once('open', function() {
    console.log('db connection successful');
});



module.exports.Destination = require("./destination");
