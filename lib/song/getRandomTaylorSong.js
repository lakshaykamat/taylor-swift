const SONGS = require("../../database/SONGS");
const { removePropFromSong } = require("../../utils");

const getRandomSong = () => {
  const randomIndex = Math.floor(Math.random() * SONGS.length);
  const song = SONGS[randomIndex];
  return removePropFromSong(song);
};

module.exports = getRandomSong;
