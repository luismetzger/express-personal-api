base_url: "https://ga-application-api.herokuapp.com/",
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
        }
