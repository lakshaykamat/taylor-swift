const ALBUMS = require("../../database/ALBUM_AND_SONGS");

const filterByAlbum = (albumName) => {
  // Input validation for albumName
  if (!albumName || typeof albumName !== "string" || albumName.trim() === "") {
    throw new Error("Invalid album name. Please specify a valid song album.");
  }
  const album = ALBUMS.find(
    (album) => album.title.toLowerCase() === albumName.toLowerCase()
  );
  if (!album) {
    throw new Error(`Album not found '${albumName}'`);
    return;
  }
  if (album.tracks) {
    return album.tracks;
  }
};

module.exports = filterByAlbum;
