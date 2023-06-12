const express = require("express");
let router = express.Router();
let Jewel = require("../models/Jewel");
let sessionAuth = require("../middlewares/sessionAuth");


router.get("/cart",sessionAuth, async (req, res) => {
    let cart = req.cookies["cart"];
    let jewels;
    console.log(cart)
    if (!cart) cart = [];
    try {
      jewels = await Jewel.find({ _id: { $in: cart } });
      //console.log(jewels)
    } catch (error) {
      console.log(error)
    }
    
    console.log("Hi from /cart jewels finding route")
    
    let total = 0;
    for (let index = 0; index < jewels.length; index++) {
      total += jewels[index].price;
    }
    
    return res.render("cart", { jewels:jewels, total });
  });
  router.get("/remove-from-cart/:id", (req, res) => {
    let cart = req.cookies["cart"];
    if (!cart) cart = [];
    if(req.params.id && req.params.id !== ""){
      let index = cart.findIndex((c) => c == req.params.id);
      cart.splice(index, 1);
    }
  
  
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
  router.post("/cart", async (req, res) => {
    try {
      console.log(req.body)
      const recordId = req.body.recordId;
      const quantity = parseInt(req.body.quantity);
      const dbQuantity = req.body.dbQuantity;

  
      // Check if recordId is a non-empty string
      if (!recordId || recordId === "") {
        throw new Error("Invalid recordId");
      }
      if(quantity<=0){
        req.setFlash("danger","Quantity is not valid")
        return res.redirect("back");

      }
      if(quantity>dbQuantity){
        req.setFlash("danger","Quantity is not avai;able")
         return res.redirect("back")
      }
      // Update the database by subtracting the quantity
      await Jewel.findByIdAndUpdate(
        recordId,
        { $inc: { quantity: -quantity } },
        { new: true }
      );
  
      // Clear the cart cookie
      res.clearCookie("cart");
  
      // Render the checkout page with the order placed message
      res.render("checkout", { orderPlaced: true });
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  });
  
  
  
  module.exports = router;