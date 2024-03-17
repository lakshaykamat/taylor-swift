const ALBUM_AND_SONGS = require("../../database/ALBUM_AND_SONGS");

const getSong = (songName) => {
  // Input validation for songName
  if (!songName || typeof songName !== "string" || songName.trim() === "") {
    return null;
  }

  // Convert songName to lowercase for case-insensitive search
  const lowercaseSongName = songName.toLowerCase();

  // Find the song in the data
  const foundSong = ALBUM_AND_SONGS.flatMap((album) => album.tracks) // Flatten the array of tracks
    .find((song) => song.name.toLowerCase() === lowercaseSongName); // Case-insensitive search

  return foundSong || null; // Return the found song or null if not found
};

console.log(getSong("lover"));

module.exports = getSong;
