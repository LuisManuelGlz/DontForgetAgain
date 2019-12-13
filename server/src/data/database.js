const mongoose = require("mongoose");

const URI = process.env.URI_DEV;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database is connected! 🎉 🎉 🎉"))
  .catch(err => console.log(err));

module.exports = mongoose;
