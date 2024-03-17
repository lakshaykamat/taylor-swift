const DB_ALBUMS = require("../../database/albums.json");
const DB_SONGS = require("../../database/songs.json");
const { removePropFromSong } = require("../../utils");
const getAlbumSongs = (albumName) => {
  const albums = [];
  const album = DB_ALBUMS.find(
    (album) => album.title.toLowerCase() === albumName.toLowerCase()
  );
  if (!album) {
    throw new Error(`Album not found '${albumName}'`);
  }
  const songs = [];
  album.tracks.forEach((track) => {
    const songId = track.$oid;
    const song = DB_SONGS.find((song) => song._id.$oid === songId);
    songs.push(removePropFromSong(song));
  });
  return songs;
};

module.exports = getAlbumSongs;
