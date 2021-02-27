const _ = require("lodash");

const generateCards = (numberOfPlayers, numberOfMafia) => {
  const cards = [];
  for (let i = 0; i < numberOfPlayers * 2; i++) {
    if (i < numberOfMafia) {
      cards.push("Мафия");
    } else {
      cards.push("Мирный");
    }
  }
  return _.shuffle(cards);
};

module.exports = {
  generateCards,
};
