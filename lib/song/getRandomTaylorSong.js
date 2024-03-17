const DB_SONGS = require("../../database/songs.json");

const getRandomSong = () => {
  const randomIndex = Math.floor(Math.random() * DB_SONGS.length);
  const song = DB_SONGS[randomIndex];
  return {
    name: song.name,
    album: song.album,
    duration: song.duration,
    artist: song.artist,
    lyrics: song.lyrics,
  };
};
module.exports = getRandomSong;
