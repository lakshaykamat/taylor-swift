const ALBUMS = require("../../database/ALBUM_AND_SONGS");

const filterByAlbum = (albumName) => {
  // Input validation for albumName
  if (!albumName || typeof albumName !== "string" || albumName.trim() === "") {
    throw new Error("Invalid album name. Please specify a valid album name.");
  }

  // Find the album in the list of albums
  const album = ALBUMS.find(
    (album) => album.title.toLowerCase() === albumName.toLowerCase()
  );

  // If album is not found, throw an error
  if (!album) {
    throw new Error(`Album not found: '${albumName}'`);
  }

  // If album is found and it has tracks, return the tracks
  if (album.tracks) {
    return album.tracks;
  } else {
    // Return an empty array if the album has no tracks
    return [];
  }
};

module.exports = filterByAlbum;
