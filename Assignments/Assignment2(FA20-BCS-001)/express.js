const express = require("express");
const server = express();
//const path = require("path");
const mongoose = require("mongoose");
var expressLayout = require("express-ejs-layouts");
var cookieParser = require("cookie-parser");
const session = require("express-session")
const bodyParser = require("body-parser");
server.use(express.json());
server.use(express.urlencoded(({ extended: true })))
server.use(expressLayout)
server.use(cookieParser())



server.use(
  session({
    secret: "My Top Secret String",
    cookie: { maxAge: 60000000 },
    resave: true,
    saveUninitialized: true,
  })
);

server.use(require("./middlewares/checkSession"));
server.use("/", require("./routes/api/stores"));
server.use("/", require("./routes/api/jewels"));
server.use("/",require("./routes/auth"))
server.use("/",require("./routes/cart"))


// Route handler
server.get("/", (req, res) => {
  res.render("index");
});







server.set("view engine", "ejs");
server.use(express.static("public"))



//server.set("views", viewsPath);
//server.use(express.static(publicPath));
server.set('views', __dirname + '/views');


mongoose
  .connect("mongodb://localhost/project", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(3000, () => {
      console.log("Server started, visit localhost:3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
