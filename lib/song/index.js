const filterByAlbum = require("./filterByAlbum");
const getLyrics = require("./getLyrics");
const getRandomSong = require("./getRandomTaylorSong");
const getSong = require("./getSong");
//const getSongNames = require("./getSongNames");
//const getSongs = require("./getSongs");

module.exports = {
  random: getRandomSong,
  filterByAlbum,
  getLyrics,
  getSong,
};
