const album = require("./lib/album");
const song = require("./lib/song");

const taylorAlbums = require("./database/ALBUM_AND_SONGS");
const taylorSongs = require("./database/SONGS");

const TAYLOR = {
  albums: taylorAlbums,
  songs: taylorSongs,
  album,
  song,
};

module.exports = TAYLOR;
