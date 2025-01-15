const mongoose = require("mongoose");

const { Schema } = mongoose;

const ShoeSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true },
});

const ShoeModel = mongoose.model("Shoe", ShoeSchema);

module.exports = ShoeModel;