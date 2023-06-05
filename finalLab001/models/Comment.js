const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  author: String,
  content: String,
  liked: String,
});
let Model = mongoose.model("Comment", modelSchema);
module.exports = Model;