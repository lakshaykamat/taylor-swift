const ALBUM_AND_SONGS = require("../../database/ALBUM_AND_SONGS");
const { removePropFromAlbum } = require("../../utils");

const randomAlbum = () => {
  // Generate a random index to select a random song
  const randomIndex = Math.floor(Math.random() * ALBUM_AND_SONGS.length);

  // Return the randomly selected song
  return removePropFromAlbum(ALBUM_AND_SONGS[randomIndex]);
};

module.exports = randomAlbum;
