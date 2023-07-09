const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  passengerDetails: {
    type: Array,
    required: true,
  },
  contactDetails: {
    type: Object,
    required: true,
  },
  selectedBus: {
    type: Object,
    required: true,
  },
  selectedSeats: {
    type: Array,
    required: true,
  },
  selectedDate: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("Receipt", receiptSchema);
