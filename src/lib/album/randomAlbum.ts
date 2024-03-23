import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { Album } from "../../types";
import { removePropFromAlbum } from "../../utils";

/**
 * Retrieves a random album from the database.
 * @returns {Album} A randomly selected album.
 */
const randomAlbum = (): Album => {
  // Generate a random index to select a random album
  const randomIndex = Math.floor(Math.random() * ALBUM_AND_SONGS.length);

  // Return the randomly selected album
  return removePropFromAlbum(ALBUM_AND_SONGS[randomIndex]) as Album;
};

export default randomAlbum;
