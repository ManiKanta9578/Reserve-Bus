const Bus = require("../models/Bus");


// @desc  GET all trips
// route GET /api/buses
// @access Public 
const getTrips = async (req, res) => {
  console.log("API Triggred");
  try {
    let buses = await Bus.find().limit(50);
    // Set response header
    res.setHeader("Content-Type", "application/json");
    // Send the saved trip as a JSON response with a 200 status code
    res.status(200).json(buses);
  } catch (err) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json(err);
  }
};

// @desc  GET all trips
// route POST /api/buses
// @access Private
const addTrip = async (req, res) => {
    const newBus = new Bus(req.body);
  
    try {
      const savedBus = await newBus.save();
      // Setting response header
      res.setHeader("Content-Type", "application/json");
      // Send the saved trip as a JSON response with a 200 status code
      res.status(200).json(savedBus);
    } catch (err) {
      // If an error occurs, send a 500 status code with the error message
      res.status(500).json(err);
    }
  }

module.exports = {getTrips, addTrip};