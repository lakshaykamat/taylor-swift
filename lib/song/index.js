const filterByAlbum = require("./filterByAlbum");
const getRandomSong = require("./getRandomTaylorSong");
const getSong = require("./getSong");
const getSongs = require("./getSongs");

module.exports = {
  random: getRandomSong,
  filterByAlbum,
  get:getSong,
  all:getSongs
};
