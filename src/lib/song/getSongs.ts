import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { Song } from "../../types";

/**
 * Retrieves all songs from the database.
 * @returns {Song[]} An array of songs.
 */
const getSongs = (): Song[] => {
  return ALBUM_AND_SONGS.flatMap((album) => album.tracks) as Song[];
};

export default getSongs;
