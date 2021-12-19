const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const MongoClient = require("mongodb").MongoClient;
app = express();
app.use("/assets/css", express.static(__dirname + "/assets/css"));
app.use("/assets/img", express.static(__dirname + "/assets/img"));
app.use("/assets/js", express.static(__dirname + "/assets/js"));
app.use(
  "/assets/ionicons-2.0.1",
  express.static(__dirname + "/assets/ionicons-2.0.1")
);
app.use("/assets/fonts", express.static(__dirname + "/assets/fonts"));
app.listen(process.env.PORT || 3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started at port 3000");
  }
});

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/");
});
app.get("/signup", function (req, res) {
  res.sendFile(__dirname + "/signup/signup.html");
});
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login/index.html");
});
app.get("/catalog", function (req, res) {
  res.sendFile(__dirname + "/catalog/index.html");
});
app.get("/catalog", function (req, res) {
  res.sendFile(__dirname + "/catalog/product.html");
});
app.get("/blog", function (req, res) {
  res.sendFile(__dirname + "/blog/index.html");
});
app.get("/gallery", function (req, res) {
  res.sendFile(__dirname + "/gallery/index.html");
});
app.get("/cart", function (req, res) {
  res.sendFile(__dirname + "/cart/index.html");
});
app.get("/checkout", function (req, res) {
  res.sendFile(__dirname + "/checkout/index.html");
});
app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const uri =
  "mongodb+srv://Yesudei:yesudei99331@cluster0.pcbbn.mongodb.net/Ecommerce?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const collection = client.db("Ecommerce").collection("shop");
