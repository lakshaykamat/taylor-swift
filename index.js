const {
  getAlbumByYear,
  getAlbumNames,
  getAlbumSongs,
  getAlbum,
} = require("./lib/album");
const {
  getSongNames,
  getRandomSong,
  getLyrics,
  getSong,
} = require("./lib/song");

const taylor = {
  album: {
    getAlbumNames,
    getAlbumSongs,
    getAlbumByYear,
    getAlbum,
  },
  song: {
    getSongNames,
    getRandomSong,
    getLyrics,
    getSong,
  },
};

module.exports = taylor;
module.exports = { song: taylor.song, album: taylor.album };
