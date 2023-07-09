const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    date: { type: Date, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    departureTime: { type: Date, required: true },
    seatBooked: { type: String, required: true },
    busFare: { type: Number, required: true },
    busName: { type: String, required: true },
});

module.exports = mongoose.model("Bookings", BookingSchema);
