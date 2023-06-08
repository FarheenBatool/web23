const express = require("express")
const crypt = require("bcryptjs")
const User = require("../models/User");
const Jewel  = require("../models/Jewel");
let admin = require("../middlewares/admin");
let sessionAuth = require("../middlewares/sessionAuth");
const path = require("path");
const multer = require("multer")
const fs = require("fs");
let router = express.Router()


router.get("/login", (req, res) => {
    res.render("auth/login", {});
  });

router.get("/register",(req,res)=>{
  res.render("auth/register");
})

router.get("/shop",(req,res)=>{
  res.render("shop");
})

router.post("/register", async (req, res) => {
  try {
    let userObj = req.body;
    console.log(userObj);

    if (req.body.Username === '' ||req.body.email === ''||req.body.password === '') {
      req.setFlash("danger","All the fields are required (name,email & password)");
      return res.redirect("/register");
    }
  


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

router.get("/adminProfile", admin, async (req, res, next) => {
  Jewel.find()
  .then((records) => {
    res.render("auth/adminProfile", {records});
  })
});

router.get("/cart",async (req, res, next) => {
  res.render("cart");
});

router.get("/edit/:id", async function (req, res) {
  const recordId = req.params.id;
  const record = await Jewel.findById(recordId);
  res.render("edit", { record});

});


router.get("/delete/:id", async function (req, res) {
  const recordId = req.params.id;
  const record = await Jewel.findByIdAndDelete(recordId);
  res.redirect("/adminProfile");

});
router.get("/add", async function (req, res) {
  res.render("add");

});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // Specify the destination folder where the uploaded files will be stored
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    // Generate a unique filename for the uploaded file
    cb(null, "image-" +  Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.post("/addNew", upload.single("image"), async function(req, res) {
  const obj = {
    img: {
      data: fs.readFileSync(path.resolve(__dirname, "../uploads", req.file.filename),'base64'),
      //contentType: "image/png",
    },
  };

  let record = new Jewel({
    image: obj.img.data,
    price:req.body.price,
    name:req.body.name,
  });
  //console.log(req.body)
  console.log(record);
  await record.save();
  res.redirect("/adminProfile");
});
router.post("/update",upload.single("image"), async function (req, res) {
  const recordId = req.body.recordId;
  
  const obj = {
    img: {
      data: fs.readFileSync(path.resolve(__dirname, "../uploads", req.file.filename),'base64'),
      //contentType: "image/png",
    },
  };
  let update = {
    image: obj.img.data,
    price:req.body.price,
    name:req.body.name,
  }
  const updatedRecord = await Jewel.findByIdAndUpdate(recordId, update, {
    new: true,
  });
  res.redirect("/adminProfile");
});




module.exports = router;