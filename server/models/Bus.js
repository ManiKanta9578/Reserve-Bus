const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  BusNo: { type: String, required: true },
  BusName: { type: String, required: true },
  Source: { type: String, required: true },
  Destination: { type: String, required: true },
  Date: { type: Date, required: true },
  DepartureTime: { type: String, required: true },
  ArrivalTime: { type: String, required: true },
  Fare: { type: Number, required: true },
});

module.exports = mongoose.model('Bus', busSchema);
