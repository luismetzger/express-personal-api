'use strict';

var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

var db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection error: ', err);
});

db.once('open', function() {
    console.log('db connection successful');
});



module.exports.Destination = require("./destination");
