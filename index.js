const album = require("./lib/album");
const song = require("./lib/song");
const quote = require("./lib/quotes");

const taylorAlbums = require("./database/ALBUM_AND_SONGS");

const TAYLOR = {
  albums: taylorAlbums,
  album,
  quote,
  song,
};

module.exports = TAYLOR;
module.exports = {
  song,
  quote,
  album
}
