const express = require("express");
const Store = require("../../models/Store");
let router = express.Router();
router.post("/api/stores", async function (req, res) {
  let record = new Store(req.body);
  console.log(req.body)
  console.log(record)
  await record.save();
  res.send(record);
});

router.put("/api/stores/:id", async function (req, res) {
  //   return res.send(req.body);
  let record = await Store.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(record);
});
router.delete("/api/stores/:id", async function (req, res) {
  let record = await Store.findByIdAndDelete(req.params.id);
  res.send("Done");
});
router.get("/api/stores/:id", async function (req, res) {
  let record = await Store.findById(req.params.id);
  res.send(record);
});
router.get("/api/stores", async function (req, res) {
  let records = await Store.find();
  res.send(records);
});

module.exports = router;