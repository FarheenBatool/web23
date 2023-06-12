const express = require("express");
const Jewel = require("../../models/Jewel");
let router = express.Router();

// router.post("/api/jewels", async function (req, res) {
//     let record = new Jewel(req.body);
//     console.log(req.body)
//     console.log(record)
//     await record.save();
//     res.send(record);
//   });
  
//   router.put("/api/jewels/:id", async function (req, res) {
//     //   return res.send(req.body);
//     let record = await Jewel.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.send(record);
//   });
//   router.delete("/api/jewels/:id", async function (req, res) {
//     let record = await Jewel.findByIdAndDelete(req.params.id);
//     res.send("Done");
//   });
//   router.get("/api/jewels/:id", async function (req, res) {
//     let record = await Jewel.findById(req.params.id);
//     res.send(record);
//   });
//   router.get("/api/jewels", async function (req, res) {
//     let records = await Jewel.find();
//     res.render("index", { records });
//   });
router.get("/", async function (req, res) {
    let records = await Jewel.find().limit(3);
    // console.log(records[0])
    res.render("index", { records });
  });

router.get("/shop", async function (req, res) {
    let records = await Jewel.find();
    res.render("shop", { records });
  });
  
  
  
  module.exports = router;