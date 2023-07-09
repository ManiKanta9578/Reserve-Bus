const router = require("express").Router();

//Navigate to Endpoints
router.get('/', (req,res) => {
    res.status(200).json({
        Capstone_Project : "Reserve Bus Booking",
        routes : [
            {
                route: "/api/trips",
                response: "POST request to Adding a New Trip",
            },
            {
                route : "/api/trips",
                response : "GET request to retrive all trips"
            },
            {
                route : "/api/bookings",
                response : "POST request for creating new ticket booking",
            },
            {
                route : "/api/bookings?q=example",
                response : "GET response All Bookings by date",
            },
            {
                route : "/api/usertrips?q=example",
                response : "GET response Trips by user query",
            }
        ]
    });
});

module.exports = router;


