const DB_SONGS = require("../../database/ALBUM_AND_SONGS.json");

const getSongs = () => {
  return DB_SONGS.flatMap(album => album.tracks);
};

module.exports = getSongs;
