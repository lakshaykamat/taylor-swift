const getAlbum = require("./getAlbum");
const filterByYear = require("./filterByYear");
const getAlbums = require("./getAlbums");
const randomAlbum = require("./randomAlbum");


module.exports = {
  filterByYear,
  get:getAlbum,
  all:getAlbums,
  random:randomAlbum,
};
