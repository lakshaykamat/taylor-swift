const ALBUM_AND_SONGS = require("../../database/ALBUM_AND_SONGS");

const getRandomSong = () => {
  // Flatten the array of tracks from all albums
  const songs = ALBUM_AND_SONGS.flatMap((album) => album.tracks);

  // Generate a random index to select a random song
  const randomIndex = Math.floor(Math.random() * songs.length);

  // Return the randomly selected song
  return songs[randomIndex];
};

console.log(getRandomSong());
module.exports = getRandomSong;
