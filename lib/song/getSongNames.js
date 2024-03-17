const DB_SONGS = require("../../database/songs.json");

const getSongNames = () => {
  const songs = [];
  DB_SONGS.forEach((song) => {
    const songName = song.name;
    songs.push(songName);
  });
  return songs;
};

module.exports = getSongNames;
