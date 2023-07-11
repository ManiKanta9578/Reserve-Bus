const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connection successfull!"))
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};


module.exports = {connectDB};