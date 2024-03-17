const DB_ALBUMS = require("../../database/albums.json");
const getAlbumNames = () => {
  const albums = [];
  DB_ALBUMS.forEach((album) => {
    const albumName = album.title;
    albums.push(albumName);
  });
  return albums;
};

module.exports = getAlbumNames;
