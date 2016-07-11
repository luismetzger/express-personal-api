'use strict';

var express = require('express');
var router = express.Router();

/************
 * DATABASE *
 ************/

var Destination = require('./models').Destination;

/**********************
 * Parameter Handlers *
 **********************/
router.param('dID', function(req, res, next, id) {
    Destination.findById(req.params.dID, function(err, doc) {
        if(err) return next(err);
        if(!doc) {
            err = new Error('Not Found');
            err.status = 404;
            return next(err);
        }
        req.destination = doc;
        return next();
    });
});

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
router.use(express.static('public'));

/*
 * HTML Endpoints
 */

router.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

router.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
            {
                method: "GET",
                path: "/profile",
                name: 'Luis Metzger',
                github_link: 'https://github.com/luismetzger',
                github_image_url: 'https://avatars3.githubusercontent.com/u/3203385?v=3&s=460',
                current_city: 'Denver',
                pets: [
                    {
                        name: 'Bailey',
                        type: 'Dog',
                        breed: 'Australian Cattle Dog'
                    },
                    {
                        name: 'Maxwell',
                        type: 'Dog',
                        breed: 'Australian Cattle Dog / Border Collie'
                    }
                ]
            },
            {
                method: "GET",
                path: "/",
                destinations: [
                                  {
                                    "_id": "5783212b350b028e25e407ec",
                                    "city": "Mie Prefecture",
                                    "country": "Japan",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407ed",
                                    "city": "Seattle",
                                    "country": "Washington",
                                    "__v": 1,
                                    "status": [
                                      {
                                        "text": "Really rainy place",
                                        "_id": "578397745e7bf78c2916604e",
                                        "votes": 0,
                                        "updatedAt": "2016-07-11T12:56:20.430Z",
                                        "createdAt": "2016-07-11T12:56:20.430Z"
                                      }
                                    ]
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407ee",
                                    "city": "Liege",
                                    "country": "Belgium",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407ef",
                                    "city": "Ibera Wetlands",
                                    "country": "Argentina",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f0",
                                    "city": "Adelaide",
                                    "country": "Australia",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f1",
                                    "city": "Okanagan Valley",
                                    "country": "British Columbia",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f2",
                                    "city": "Casablanca",
                                    "country": "Morocco",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f3",
                                    "city": "Chiloe",
                                    "country": "Chile",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f4",
                                    "city": "Bozeman",
                                    "country": "Montana",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f5",
                                    "city": "Canouan",
                                    "country": "Grenadines",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f6",
                                    "city": "Placencia",
                                    "country": "Belize",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f7",
                                    "city": "Sicily",
                                    "country": "Italy",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f8",
                                    "city": "Pittsburgh",
                                    "country": "Pennsylvania",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "5783212b350b028e25e407f9",
                                    "city": "Zagreb",
                                    "country": "Croatia",
                                    "__v": 0,
                                    "status": []
                                  },
                                  {
                                    "_id": "57833344bb3bfd532605d954",
                                    "city": "Aspen",
                                    "country": "United States",
                                    "__v": 3,
                                    "status": [
                                      {
                                        "text": "Updated my review",
                                        "_id": "5783961db4dc2c7b297d26d2",
                                        "votes": 0,
                                        "updatedAt": "2016-07-11T12:50:37.429Z",
                                        "createdAt": "2016-07-11T12:50:37.429Z"
                                      },
                                      {
                                        "text": "Nice mountain town!",
                                        "_id": "57833a89b41c5ab2266d598a",
                                        "vote": 0,
                                        "votes": 0,
                                        "updatedAt": "2016-07-11T06:19:53.186Z",
                                        "createdAt": "2016-07-11T06:19:53.186Z"
                                      },
                                      {
                                        "text": "Awesome Place!",
                                        "_id": "57833a72b41c5ab2266d5989",
                                        "vote": 0,
                                        "votes": 0,
                                        "updatedAt": "2016-07-11T06:19:30.562Z",
                                        "createdAt": "2016-07-11T06:19:30.562Z"
                                      }
                                    ]
                                  }
                                ]
            },
            {
                method: "POST",
                path: "/",
                destinations:[{}]
            },
            {
                method: "GET",
                path: "/:dID",
                _id: "5783212b350b028e25e407f4",
                city: "Bozeman",
                country: "Montana",
                __v: 0,
                status: []
            },
            {
                method: "POST",
                path: "/:dID/locations",
                _id: "5783212b350b028e25e407f4",
                city: "Bozeman",
                country: "Montana",
                __v: 0,
                status: [
                    {
                        text: "Great little mountain town!",
                        _id: "57839be6ebfc38b229681b55",
                        votes: 0,
                        updatedAt: "2016-07-11T13:15:18.205Z",
                        createdAt: "2016-07-11T13:15:18.205Z"
                    }
                ]
            },
            {
                method: "PUT",
                path: "/:dID/locations/:uID",
                response: "You sent me a PUT request to destination: 57839be6ebfc38b229681b55",
                destinationId: "5783212b350b028e25e407f4",
                updatedId: "57839be6ebfc38b229681b55",
                body: {
                    "text": "So close to Canada!!!"
                  }
            },
            {
                method: "DELETE",
                path: "/:dID/locations/:uID",
                response: "You sent me a DELETE request to destination ID: 57839be6ebfc38b229681b55",
                destinationId: "5783212b350b028e25e407f4",
                updatedId: "57839be6ebfc38b229681b55"
            },

    ]
  })
});

/*
 * JSON Profile Endpoints
 */

router.get('/profile', function(req, res) {
    // Return profile
    res.json({
        name: 'Luis Metzger',
        github_link: 'https://github.com/luismetzger',
        github_image_url: 'https://avatars3.githubusercontent.com/u/3203385?v=3&s=460',
        current_city: 'Denver',
        pets: [
            {
                name: 'Bailey',
                type: 'Dog',
                breed: 'Australian Cattle Dog'
            },
            {
                name: 'Maxwell',
                type: 'Dog',
                breed: 'Australian Cattle Dog / Border Collie'
            }
        ]
    });
});

/*
 * JSON GET all /destinations
 */
 router.get('/destinations', function(req, res, next) {
     Destination.find({})
                .sort({createdAt: -1})
                .exec(function(err, locations) {
                    if(err) return next(err);
                    res.json(locations);
                });
    //  res.json(best_places_to_travel_2016);
 });

 /*
  * JSON POST a new /destination
  */
  router.post('/destinations', function(req, res, next) {
      var destination = new Destination(req.body);
      destination.save(function(err, destination) {
          if(err) return next(err);
          res.status(201);
          res.json(destination);
      });
    //   res.json({
    //       response: 'You sent me a POST request',
    //       body: req.body
    //   });
  });

  /*
   * JSON GET specific destination - /destinations/:dID
   */
   router.get('/destinations/:dID', function(req, res, next) {
       res.json(req.destination);
    //    res.json({
    //        response: 'You sent me a GET request for ID: ' + req.params.dID
    //    });
   });

   /*
    * JSON POST create a specific /:dID/locations
    */
    router.post('/destinations/:dID/locations', function(req, res, next) {
        req.destination.status.push(req.body);
        req.destination.save(function(err, destination) {
            if(err) return next(err);
            res.status(201);
            res.json(destination);
        });
        // res.json({
        //     response: 'You sent a POST request to /locations',
        //     destinationId: req.params.dID,
        //     body: req.body
        // });
    });

   /*
    * JSON PUT edit a specific /locations/:uID
    */
    router.put('/destinations/:dID/locations/:uID', function(req, res) {
        // req.locations.update(req.body, function(err, result) {
        //     if(err) return next(err);
        //     res.json(result);
        // });
        res.json({
            response: 'You sent me a PUT request to destination: ' + req.params.uID,
            destinationId: req.params.dID,
            updateId: req.params.uID,
            body: req.body
        });
    });

    /*
     * JSON DELETE a specifc /locations/:uID
     */
     router.delete('/destinations/:dID/locations/:uID', function(req, res) {
        //  req.locations.remove(function(err) {
        //      req.destination.save(function(err, question) {
        //          if(err) return next(err);
        //          res.json(destination);
        //      });
        //  });
         res.json({
             response: 'You sent me a DELETE request to destination ID: ' + req.params.uID,
             destinationId: req.params.dID,
             updateId: req.params.uID
         });
     });

   /*
    * JSON POST vote to a specific destination - /destinations/:dID/vote-up
    * JSON POST vote to a specific destination - /destinations/:dID/vote-down
    */
    // router.post('/:dID/locations/:uID/vote-:dir',
    //     function(req, res, next) {
    //         if(req.params.dir.search(/^(up|down)$/) === -1) {
    //             var err = new Error('Not Found');
    //             err.status = 404;
    //             next(err);
    //         } else {
    //             req.vote = req.params.dir;
    //             next();
    //         }
    //     },
    //     function(req, res, next) {
    //         req.locations.vote(req.votes, function(err, destination) {
    //             if(err) return next(err);
    //             res.json(destination);
    //         });

        // res.json({
        //     response: 'You sent me a POST request to /vote-' + req.params.dir,
        //     destinationId: req.params.dID,
        //     updateId: req.params.uID,
        //     vote: req.params.dir
        // });
    // });


module.exports = router;
