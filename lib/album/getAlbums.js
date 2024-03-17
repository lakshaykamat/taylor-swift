const DB_ALBUMS = require("../../database/albums.json");
const getAlbums = () => {
  const albums = [];
  DB_ALBUMS.forEach((album) => {
    const albumName = album.title;
    albums.push(albumName);
  });
  return albums;
};

module.exports = getAlbums;
