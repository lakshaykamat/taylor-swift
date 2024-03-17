const QUOTES = require("../../database/quotes");

const filterByAlbum = (albumName) => {
  // Input validation for albumName
  if (!albumName || typeof albumName !== "string" || albumName.trim() === "") {
    throw new Error("Invalid album name. Please specify a valid album name.");
  }

  // Filter quotes by the given album name
  return QUOTES.filter(
    (q) => q.album.toLowerCase() === albumName.toLowerCase()
  );
};

module.exports = filterByAlbum;