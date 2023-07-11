// const Bus = require("../models/Bus");
const {getTrips,addTrip} = require("../controllers/busController.js");
const router = require("express").Router();

//POST new trip
router.post("/", addTrip);

// GET All Tripes
router.get("/", getTrips );


module.exports = router;
