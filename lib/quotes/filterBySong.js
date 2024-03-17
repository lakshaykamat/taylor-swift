const QUOTES = require("../../database/quotes");

const filterBySong = (songName) => {
  // Input validation for songName
  if (!songName || typeof songName !== "string" || songName.trim() === "") {
    throw new Error("Invalid song name. Please specify a valid song name.");
  }

  // Filter quotes by the given song name
  return QUOTES.filter((q) => q.song.toLowerCase() === songName.toLowerCase());
};

module.exports = filterBySong;