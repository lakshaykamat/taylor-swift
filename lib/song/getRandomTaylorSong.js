const DB_SONGS = require("../../database/songs.json");
const { removePropFromSong } = require("../../utils");

const getRandomSong = () => {
  const randomIndex = Math.floor(Math.random() * DB_SONGS.length);
  const song = DB_SONGS[randomIndex];
  return removePropFromSong(song);
};
module.exports = getRandomSong;
