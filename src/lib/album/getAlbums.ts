import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { Album } from "../../types";
import { removePropFromAlbum } from "../../utils";

/**
 * Retrieves all albums from the database.
 * @returns {Album[]} An array of albums.
 */
const getAlbums = (): Album[] => {
  return ALBUM_AND_SONGS.map(removePropFromAlbum) as Album[];
};

export default getAlbums;
