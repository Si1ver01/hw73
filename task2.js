const express = require("express");
const app = express();
const PORT = 8000;
const KEY = "x";

const Caesar = require("caesar-salad").Caesar;

app.get("/", (req, res) => {
  res.send({ encode: "GET /encode/:name", decode: "GET /decode/:name" });
});

app.get("/encode/:name", (req, res) => {
  const name = req.params.name;
  res.send(Caesar.Cipher(KEY).crypt(name));
});

app.get("/decode/:name", (req, res) => {
  const name = req.params.name;
  res.send(Caesar.Decipher(KEY).crypt(name));
});

app.listen(PORT, () => {
  console.log(`Server listen port : ${PORT}`);
});
