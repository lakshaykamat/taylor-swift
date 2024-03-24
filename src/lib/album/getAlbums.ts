import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { Album } from "../../types";
import { compareReleaseDates, removePropFromAlbum } from "../../utils";

/**
 * Retrieves all albums from the database.
 * @returns {Album[]} An array of albums.
 */
const getAlbums = (): Album[] => {
  return ALBUM_AND_SONGS.map(removePropFromAlbum).sort(
    compareReleaseDates
  ) as Album[];
};

export default getAlbums;
