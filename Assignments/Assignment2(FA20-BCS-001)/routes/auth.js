const express = require("express")
const crypt = require("bcryptjs")
const User = require("../models/User");
let admin = require("../middlewares/admin")
let sessionAuth = require("../middlewares/sessionAuth")
let router = express.Router()


router.get("/login", (req, res) => {
    res.render("auth/login", {});
  });

router.get("/register",(req,res)=>{
  res.render("auth/register");
})

// router.post("/register",async (req,res)=>{
//   //await User.deleteMany({});
//   let userObj = req.body;
//   console.log(userObj)
//   if(userObj.email = await User.findOne({email:req.body.email})){
//     req.setFlash("danger","User with this email already exist");
//     return res.redirect("/register");
//   }
//   const salt = await crypt.genSalt(10);
//   const hashed = await crypt.hash(userObj.password,salt);
//   userObj.password = hashed;
//   let user = new User(userObj);
//   await user.save();
//   return res.redirect("/login");
  

// })
router.post("/register", async (req, res) => {
  try {
    let userObj = req.body;
    console.log(userObj);

    // Check if the email already exists
    if (await User.findOne({ email: userObj.email })) {
      req.setFlash("danger", "User with this email already exists");
      return res.redirect("/register");
    }

    const salt = await crypt.genSalt(10);
    const hashed = await crypt.hash(userObj.password, salt);
    userObj.password = hashed;

    let user = new User(userObj);
    await user.save();
    return res.redirect("/login");
  } catch (error) {
    console.error(error);
    req.setFlash("danger", "An error occurred during registration. Please try again.");
    return res.redirect("/register");
  }
});


router.post("/login", async (req,res)=>{
  let user = await User.findOne({email:req.body.email})
  console.log(user)
  if (!user){
    req.setFlash("danger","User with this Email does not exist");
    return res.redirect("/login");
  }
  const checkPassword = await crypt.compare(req.body.password, user.password)
  if (checkPassword) {
    req.session.user = user;
    req.setFlash("success","Logged in Sucessfully")
    return res.redirect("/");
  }
  else{
    req.setFlash("danger","invalid password");
    return res.redirect("/login");
  }
});

router.get("/profile",sessionAuth,async (req, res, next) => {
  res.render("auth/profile");
});

router.get("/logout",(req,res)=>{
  req.session.destroy();
  return res.redirect("/login");
})

router.get("/adminProfile",async (req, res, next) => {
  res.render("auth/adminProfile");
});



module.exports = router;