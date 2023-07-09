const Booking = require("../models/Booking");

const router = require("express").Router();

//POST new booking

router.post("/save-details", async (req, res) => {
  const { passengerDetails, contactDetails } = req.body;

  try {
    // Save passenger details and contact details to the database
    const newPassenger = new Passenger(passengerDetails);
    const savedPassenger = await newPassenger.save();

    const newContact = new Contact(contactDetails);
    const savedContact = await newContact.save();

    // Send a success response back to the client
    res.status(200).json({ success: true });
  } catch (error) {
    // If an error occurs, send an error response with the error message
    res.status(500).json({ success: false, error: error.message });
  }
});


// router.post("/", async (req, res) => {
//   const newBooking = new Booking(req.body);


//   try {
//     const savedBooking = await newBooking.save();
//     // set response header
//     res.setHeader("Content-Type", "application/json");
//     // Send the saved booking as a JSON response with a 200 status code 
//     res.status(200).json(savedBooking);
//   } catch (err) {
//     // If an error occurs, send a 500 status code with the error message
//     res.status(500).json(err);
//   }
// });

//GET booking details based on date
router.get("/", async (req, res) => {
  const { date } = req.query;

  try {
    // Find bookings based on the provided date 
    const bookings = await Booking.find({ date }).exec();
    // Set response header
    res.setHeader("Content-Type", "application/json");
    // Send the saved booking as a JSON response with a 200 status code
    res.status(200).json(bookings);
  } catch (err) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ error: 'Failed to get bookings details' });
  }
});

module.exports = router;


