const ALBUM_AND_SONGS = require("../../database/ALBUM_AND_SONGS.json");

const filterByYear = (year) => {
  // Input validation for year
  if (!year) {
    throw new Error("Error: Please specify a year");
  }

  // Filter albums by the given year
  const albumsFilteredByYear = ALBUM_AND_SONGS.filter(
    (album) => album.releaseDate[2] == year
  );

  return albumsFilteredByYear;
};
module.exports = filterByYear;
