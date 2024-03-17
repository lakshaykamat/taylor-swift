const SONGS = require("../../database/SONGS");
const { removePropFromSong } = require("../../utils");

const getSong = (songName) => {
  // Input validation for songName
  if (!songName || typeof songName !== "string" || songName.trim() === "") {
    throw new Error("Invalid song name. Please specify a valid song name.");
  }

  // Case-insensitive search for song name
  const song = SONGS.find(
    (s) => s.name.toLowerCase() === songName.toLowerCase()
  );

  // Check if song exists
  if (!song) {
    throw new Error(`Song not found: '${songName}'`);
  }

  // Return song
  return removePropFromSong(song);
};

module.exports = getSong;
