const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log("server running..");
});
