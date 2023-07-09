const UserTrip = require("../models/Bus");

const router = require("express").Router();

// GET all trips based on user specified data
router.get("/", async (req, res) => {
  // Extract user specified parameters from the query string
  const {
    from,
    to,
    date,
    arrival,
    departure,
    startRating,
    endRating,
    operators,
  } = req.query;

  const query = {};

  if (from) {
    query.from = from;
  }
  if (to) {
    query.to = to;
  }
  if (date) {
    query.date = date;
  }
  if (arrival) {
    query.arrival = arrival;
  }
  if (departure) {
    query.departure = departure;
  }
  if (startRating && endRating) {
    query.rating = {
      $gte: parseFloat(startRating),
      $lte: parseFloat(endRating),
    };
  }
  if (operators) {
    query.operator = { $in: operators };
  }

  try {
    // Finding trips based on the query
    const trips = await UserTrip.find(query);
    // Set response header
    res.setHeader("Content-Type", "application/json");
    // Send the saved trip as a JSON response with a 200 status code
    res.status(200).json(trips);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res
      .status(500)
      .json(error);
  }
});

module.exports = router;
