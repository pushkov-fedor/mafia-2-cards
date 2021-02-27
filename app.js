const express = require("express");
const cors = require("cors");
const { generateCards } = require("./model/cards");

const app = express();
const port = 3000;

let cards = generateCards(6, 2);

app.use(express.static("public"));

app.get("/all", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("cyka", "cyka");
  res.set("Access-Control-Expose-Headers", "cyka");
  res.send(cards);
});

app.get("/deal-card", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("cyka", "cyka");
  res.set("Access-Control-Expose-Headers", "cyka");
  const [first, second] = cards;
  if (!first || !second) {
    res.send("Больше нет карт");
    return;
  }
  cards.splice(0, 2);

  res.send([first, second]);
});

app.get("/reset-cards", (req, res) => {
  cards = generateCards(6, 2);

  res.send("Карты перегенерированы");
});

app.listen(port);
