const Receipt = require("../models/Receipt");


// @desc  POST Receipt data
// route POST /api/receipt
// @access Public
const saveReceiptData = async (req, res) => {
    console.log("Receipt POST Triggered");
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
  };


// @desc  GET Receipt data
// route GET /api/receipt
// @access Private
  const getReceiptData = async (req, res) => {
    console.log("Receipt GET triggered")
    try {
      const receipts = await Receipt.find().sort({ _id: -1 });
      res.json(receipts);
    } catch (error) {
      console.error("Error retrieving receipt data:", error);
      res.status(500).json({ error: "Failed to retrieve receipt data" });
    }
  }

  module.exports = {saveReceiptData, getReceiptData};