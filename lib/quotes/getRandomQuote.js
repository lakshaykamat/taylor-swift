const QUOTES = require("../../database/quotes");

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[randomIndex];
};

module.exports = getRandomQuote;
