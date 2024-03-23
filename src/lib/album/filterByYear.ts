import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { AlbumWithTracks } from "../../types";

/**
 * Filters albums by the given year.
 * @param {number} year - The year to filter albums by.
 * @returns {AlbumWithTracks[]} An array of albums filtered by the given year.
 * @throws {Error} Thrown if the provided year is invalid or not specified.
 */
const filterByYear = (year: number): AlbumWithTracks[] => {
  // Input validation for year
  if (!year) {
    throw new Error("Error: Please specify a year");
  }

  // Filter albums by the given year
  const albumsFilteredByYear = ALBUM_AND_SONGS.filter(
    (album) => album.releaseDate[2] == year
  );

  return albumsFilteredByYear as AlbumWithTracks[];
};

export default filterByYear;
