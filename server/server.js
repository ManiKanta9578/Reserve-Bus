const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { connectDB } = require("./config/db");
const busRoute = require("./routes/bus");
const stripeRoute = require("./routes/stripe");
const receiptRoute = require("./routes/receipt");
const userRoute = require('./routes/userRoutes');

connectDB();

var cors = require('cors');
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/buses", busRoute);
app.use("/api/stripe", stripeRoute);
app.use("/api/receipt", receiptRoute);

app.use('/api/users', userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log("Server is running on PORT", process.env.PORT);
});
