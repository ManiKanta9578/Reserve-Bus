const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const navRoute = require("./routes/homepage");
const busRoute = require("./routes/bus");
const bookingRoute = require("./routes/booking");
const userTripRoute = require("./routes/userTrips");
const userSeatRoute = require("./routes/seat");
const stripeRoute = require("./routes/stripe");
const receiptRoute = require("./routes/receipt");

var cors = require('cors');
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successfull!"))
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/", navRoute);
app.use("/api/buses", busRoute);
app.use("/api/usertrips", userTripRoute);
app.use("/api/bookings", bookingRoute);
app.use("/seats", userSeatRoute);
app.use("/api/stripe", stripeRoute);
app.use("/api/receipt", receiptRoute);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log("Server is running on PORT", process.env.PORT);
});
