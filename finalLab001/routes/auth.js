const express = require("express")
const Comment = require("../models/Comment");
let router = express.Router()

router.get("/add", (req, res) => {
    res.render("add", {});
  });

router.post("/submit",async function (req, res) {
  let com = new Comment(req.body);
  console.log(req.body)
  console.log(com)
  await com.save();
  res.redirect("/");
});


router.post("/delete", async function (req, res) {
    const commentId = req.body.commentId;
    await Comment.findByIdAndDelete(commentId);
    res.redirect("/");
  
});








  module.exports = router;