const ALBUM_AND_SONGS = require("../../database/ALBUM_AND_SONGS.json");
const { removePropFromAlbum } = require("../../utils");

const getAlbums = () => {
  return ALBUM_AND_SONGS.map(removePropFromAlbum);
};

module.exports = getAlbums