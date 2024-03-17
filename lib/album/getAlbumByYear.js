const DB_ALBUM = require("../../database/albums.json");
const getAlbumByYear = (year) => {
  if (!year) {
    console.error("Error: Specify year");
    return undefined;
  }
  const album = DB_ALBUM.find((album) => album.releaseDate[2] == year);
  return {
    title: album.title,
    releaseDate: album.releaseDate,
    albumCover: album.albumCover,
    artist: album.artist,
    songCount: album.tracks.length,
  };
};
module.exports = getAlbumByYear;
