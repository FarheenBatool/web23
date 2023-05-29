const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  city: String,
});
let Model = mongoose.model("Store", modelSchema);
module.exports = Model;