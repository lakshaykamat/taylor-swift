const removePropFromAlbum = (album) => {
  return {
    title: album.title,
    releaseDate: album.releaseDate,
    albumCover: album.albumCover,
    artist: album.artist,
    songCount: album.tracks.length,
  };
};
const removePropFromSong = (song) => {
  return {
    name: song.name,
    artist: song.artist,
    duration: song.duration,
    lyrics: song.lyrics,
    album: song.album,
  };
};
module.exports = {
  removePropFromAlbum,
  removePropFromSong,
};
