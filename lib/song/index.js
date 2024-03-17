const filterByAlbum = require("./filterByAlbum");
const getRandomSong = require("./getRandomTaylorSong");
const getSong = require("./getSong");

module.exports = {
  random: getRandomSong,
  filterByAlbum,
  getSong,
};
