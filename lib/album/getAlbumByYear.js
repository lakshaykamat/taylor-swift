const DB_ALBUM = require("../../database/albums.json");
const { removePropFromAlbum } = require("../../utils");
const getAlbumByYear = (year) => {
  if (!year) {
    console.error("Error: Specify year");
    return undefined;
  }
  const album = DB_ALBUM.find((album) => album.releaseDate[2] == year);
  return removePropFromAlbum(album);
};
module.exports = getAlbumByYear;
