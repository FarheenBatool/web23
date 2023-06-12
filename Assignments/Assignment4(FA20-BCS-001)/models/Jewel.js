const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  price: Number,
  image:String,
  quantity: Number
});
let Model = mongoose.model("Jewel", modelSchema);
module.exports = Model;