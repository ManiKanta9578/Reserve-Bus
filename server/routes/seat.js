const Seat = require("../models/Seat");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const seats = await Seat.find();
    res.status(200).json(seats);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { isAvailable, passengerName } = req.body;

    const seat = await Seat.findByIdAndUpdate(
      id,
      { isAvailable, passengerName },
      { new: true }
    );

    res.json(seat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
    const newSeat = new Seat(req.body);
  
    try {
      const savedSeat = await newSeat.save();
      res.status(200).json(savedSeat);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
