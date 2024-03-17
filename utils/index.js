const removePropFromAlbum = (album) => {
  return {
    title: album.title,
    releaseDate: album.releaseDate,
    albumCover: album.albumCover,
    artist: album.artist,
    songCount: album.tracks.length,
  };
};
module.exports = {
  removePropFromAlbum,
};
