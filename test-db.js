// test-db.js
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection OK");
  })
  .catch((err) => {
    console.error("DB connection FAILED:", err);
  });
