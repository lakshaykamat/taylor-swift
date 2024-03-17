const DB_ALBUMS = require("../../database/albums.json");
const { removePropFromAlbum } = require("../../utils");

const getAlbum = (albumName) => {
  // Input validation for albumName
  if (!albumName || typeof albumName !== "string" || albumName.trim() === "") {
    throw new Error("Invalid album name. Please specify a valid song album.");
  }

  // Case-insensitive search for album name
  const album = DB_ALBUMS.find(
    (a) => a.title.toLowerCase() === albumName.toLowerCase()
  );

  // Check if album exists
  if (!album) {
    throw new Error(`Albun not found: '${albumName}'`);
  }

  // Return album
  return removePropFromAlbum(album);
};

module.exports = getAlbum;
