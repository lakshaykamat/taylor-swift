const ALBUM = require("../../database/ALBUM_AND_SONGS");

const filterByYear = (year) => {
  if (!year) {
    console.error("Error: Specify year");
    return undefined;
  }
  return ALBUM.find((album) => album.releaseDate[2] == year);
};

module.exports = filterByYear;
