const DB_ALBUMS = require("../../database/albums.json");
const DB_SONGS = require("../../database/songs.json");
const { removePropFromSong, writeDataToFile } = require("../../utils");

const getAlbums = () => {
  const albums = [];
  DB_ALBUMS.forEach((album) => {
    const obj = {
      name: album.title,
      albumCover: album.albumCover,
      artist: album.artist,
      releaseDate: album.releaseDate,
      tracks: [],
    };
    const songs = DB_SONGS.filter((song) => song.album === album.title);
    songs.forEach((song) => {
      obj.tracks.push(removePropFromSong(song));
    });
    // obj.tracks = songs;
    albums.push(obj);
  });
  writeDataToFile(albums, "output.js");
  return albums;
};
