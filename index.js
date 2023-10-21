const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/user");
app.use(express.json());

const port = 5000;
connectDB();

app.use("/api/user", userRoute);

app.listen(port, (err) => {
  err ? console.log("err", err) : console.log(`server run on port ${port}`);
});
