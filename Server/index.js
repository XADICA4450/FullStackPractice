const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");
const route = require("./Route/route");
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api", route);

mongoose
  .connect(
    "mongodb+srv://xadicahbazmp202:xadicahbazmp202@cluster0.lnkjt.mongodb.net/Shoe?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(
        `Example app listening on port ${port}, url is http://localhost:${port}`
      );
    });
  });
