const express = require("express");
const router = express.Router();
const Receipt = require("../models/Receipt");

// POST route to save receipt data
router.post("/", async (req, res) => {
  const { passengerDetails, contactDetails, selectedBus, selectedSeats, selectedDate } = req.body;

  try {
    const receipt = new Receipt({
      passengerDetails,
      contactDetails,
      selectedBus,
      selectedSeats,
      selectedDate
    });

    await receipt.save();
    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving receipt data:", error);
    res.status(500).json({ error: "Failed to save receipt data" });
  }
});

// GET route to retrieve receipt data
router.get("/", async (req, res) => {
  try {
    const receipts = await Receipt.find().sort({ _id: -1 });
    res.json(receipts);
  } catch (error) {
    console.error("Error retrieving receipt data:", error);
    res.status(500).json({ error: "Failed to retrieve receipt data" });
  }
});


module.exports = router;
