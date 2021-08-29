const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const azureConfig = require("./configs/azure_configs");
const bcrypt = require("bcrypt");

app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
  res.status(200).send("OK");
});

app.get("/api/bcrypt-data", async (req, res, next) => {
  const password = await bcrypt.hash("password", 5);
  res.status(200).send(password);
});

app.get("/api/get-config", async (req, res, next) => {
  res.status(200).send(azureConfig);
});

app.listen(PORT, () => {
  console.log("server running on ", PORT);
});
