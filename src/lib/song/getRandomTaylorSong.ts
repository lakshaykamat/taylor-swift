import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { Song } from "../../types";

/**
 * Retrieves a random song from the database.
 * @returns {Song} A randomly selected song.
 */
const getRandomSong = (): Song => {
  // Flatten the array of tracks from all albums
  const songs = ALBUM_AND_SONGS.flatMap((album) => album.tracks);

  // Generate a random index to select a random song
  const randomIndex = Math.floor(Math.random() * songs.length);

  // Return the randomly selected song
  return songs[randomIndex] as Song;
};

export default getRandomSong;
