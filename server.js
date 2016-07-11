'use strict';

// require express and other modules
var express = require('express'),
    app = express(),
    routes = require('./routes'),
    PORT = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    logger = require('morgan');

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// Middleware Testing
// app.use(function(req, res, next) {
//     console.log('First piece of middleware working');
//     next();
// });
//
// app.use('/different/:id', function(req, res, next) {
//     console.log('Second piece of middleware working, ID: ' + req.params.id);
//     next();
// });

// Check json incoming requests
// var jsonCheck = function(req, res, next) {
//     if(req.body) {
//         console.log('The request json post coming in is: ' + req.body.color);
//     } else {
//         console.log('There is no body property on the request');
//     }
//     next();
// }

// Adding dev to logger method
app.use(logger('dev'));


// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(jsonCheck);


/************
 *  Use the routes from the routes.js file *
 ************/

// All of my routes
app.use('/', routes);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(PORT, function () {
  console.log('Express server is up and running on ' + PORT);
});
