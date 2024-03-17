const DB_SONGS = require("../../database/songs.json");

const getLyrics = (songName) => {
  // Input validation for songName
  if (!songName || typeof songName !== "string" || songName.trim() === "") {
    throw new Error("Invalid song name. Please specify a valid song name.");
  }

  // Case-insensitive search for song name
  const song = DB_SONGS.find(
    (s) => s.name.toLowerCase() === songName.toLowerCase()
  );

  // Check if song exists
  if (!song) {
    throw new Error(`Song not found: '${songName}'`);
  }

  // Check if lyrics exist
  if (
    !song.lyrics ||
    typeof song.lyrics !== "string" ||
    song.lyrics.trim() === ""
  ) {
    throw new Error(`Lyrics not available for song: '${songName}'`);
  }

  // Return lyrics
  return song.lyrics;
};

module.exports = getLyrics;
