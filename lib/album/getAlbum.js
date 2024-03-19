const ALBUM_AND_SONGS = require("../../database/ALBUM_AND_SONGS");

const getAlbum = (albumName) => {
  // Input validation for albumName
  if (!albumName || typeof albumName !== "string" || albumName.trim() === "") {
    throw new Error("Invalid album name. Please specify a valid song album.");
  }

  // Case-insensitive search for album name
  const album = ALBUM_AND_SONGS.find(
    (a) => a.title.toLowerCase() === albumName.toLowerCase()
  );

  // Check if album exists
  if (!album) {
    throw new Error(`Albun not found: '${albumName}'`);
  }

  // Return album
  return album;
};

module.exports = getAlbum;
