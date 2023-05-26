const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefData = require("./Data/chefData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef data is running");
});

app.get("/chefData", (req, res) => {
  res.send(chefData);
});

app.get("/chefData/:id", (req, res) => {
  const id = req.params.id;
  const item = chefData.find((p) => p.id == id);
  res.send({ item });
});



app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
