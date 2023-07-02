require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");
//
const app = express();
//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/", routes);
//
app.get("/", (req, res) => {
  res.send("hello");
});
//
const PORT = process.env.PROD_URL || 4000;
//
app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${PORT}`);
});
