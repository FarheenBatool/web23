const express = require("express");
let router = express.Router();
let Jewel = require("../models/Jewel");

router.get("/cart", async (req, res) => {
    let cart = req.cookies["cart"];
    if (!cart) cart = [];
    let jewels = await Jewel.find({ _id: { $in: cart } });
    console.log("Hi from /cart jewels finding route")
    let total = 0;
    for (let index = 0; index < jewels.length; index++) {
      total += jewels[index].price;
    }
    return res.render("cart", { jewels, total });
  });
  router.get("/remove-from-cart/:id", (req, res) => {
    let cart = req.cookies["cart"];
    if (!cart) cart = [];
    let index = cart.find((c) => c == req.params.id);
    cart.splice(index, 1);
  
    res.cookie("cart", cart);
    return res.redirect("back");
  });
  router.get("/add-to-cart/:id", (req, res) => {
    let cart = req.cookies["cart"];
    if (!cart) cart = [];
    cart.push(req.params.id);
    res.cookie("cart", cart);
    console.log("Hi from add to cart route cart.js")
    return res.redirect("back");
  });
  
  module.exports = router;