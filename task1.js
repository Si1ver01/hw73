const express = require("express");
const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Выполните запрос на /:name");
});

app.get("/:name", (req, res) => {
  res.send("Вот мы и получили: " + req.params.name);
});
