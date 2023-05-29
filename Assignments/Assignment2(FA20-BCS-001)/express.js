const express = require("express");
const server = express();
//const path = require("path");
const mongoose = require("mongoose");

server.use(express.json());


server.use("/", require("./routes/api/stores"));


server.set("view engine", "ejs");
server.use(express.static("public"))
//server.set("views", viewsPath);
//server.use(express.static(publicPath));

// Route handler
server.get("/", (req, res) => {
  res.render("index");
});

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
