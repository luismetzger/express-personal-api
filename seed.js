// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

/**********
 * DB *
 **********/

var best_places_to_travel_2016 = [
    {
        city: 'Mie Prefecture',
        country: 'Japan'
    },
    {
        city: 'Seattle',
        country: 'Washington'
    },
    {
        city: 'Liege',
        country: 'Belgium'
    },
    {
        city: 'Ibera Wetlands',
        country: 'Argentina'
    },
    {
        city: 'Adelaide',
        country: 'Australia'
    },
    {
        city: 'Okanagan Valley',
        country: 'British Columbia'
    },
    {
        city: 'Casablanca',
        country: 'Morocco'
    },
    {
        city: 'Chiloe',
        country: 'Chile'
    },
    {
        city: 'Bozeman',
        country: 'Montana'
    },
    {
        city: 'Canouan',
        country: 'Grenadines'
    },
    {
        city: 'Placencia',
        country: 'Belize'
    },
    {
        city: 'Sicily',
        country: 'Italy'
    },
    {
        city: 'Pittsburgh',
        country: 'Pennsylvania'
    },
    {
        city: 'Zagreb',
        country: 'Croatia'
    }
];



db.Destination.remove({}, function(err, albums){

  db.Destination.create(best_places_to_travel_2016, function(err, locations){
    if (err) { return console.log('ERROR', err); }
    console.log("all destinations:", locations);
    console.log("created", locations.length, "locations");
    process.exit();
  });

});
