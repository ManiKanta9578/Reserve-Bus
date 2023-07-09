const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  seatNumber: {
    type: String,
    required: true,
    unique: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  passengerName: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Seat", seatSchema);
