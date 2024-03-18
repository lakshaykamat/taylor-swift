const ALBUMS = require("../../database/ALBUM_AND_SONGS");

const filterByYear = (year) => {
  // Input validation for year
  if (!year) {
    throw new Error("Error: Please specify a year");
  }

  // Filter albums by the given year
  const albumsFilteredByYear = ALBUMS.filter(
    (album) => album.releaseDate[2] == year
  );

  return albumsFilteredByYear;
};

module.exports = filterByYear;
