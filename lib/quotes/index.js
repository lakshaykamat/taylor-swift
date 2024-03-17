const filterByAlbum = require("./filterByAlbum");
const filterBySong = require("./filterBySong");
const getRandomQuote = require("./getRandomQuote");

module.exports = {
  random: getRandomQuote,
  filterByAlbum: filterByAlbum,
  filterBySong: filterBySong,
};
