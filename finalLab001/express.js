const express = require("express");
const server = express();
const mongoose = require("mongoose");
server.use(express.urlencoded(({ extended: true })))
server.use(express.json())
server.set("view engine", "ejs");
server.use(express.static("public"))


server.use("/", require("./routes/api/comments"));
server.use("/",require("./routes/auth"))
const Comment = require("./models/Comment");





server.get("/",(req,res)=>{
  Comment.find()
  .then((comments) => {
    res.render("index", { comments });
  })
 
})


server.get("/index", (req, res) => {
  Comment.find()
  .then((comments) => {
    res.render("index", { comments }); 
  })
});












mongoose
  .connect("mongodb://localhost/project", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(4000, () => {
      console.log("Server started, visit localhost:4000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
