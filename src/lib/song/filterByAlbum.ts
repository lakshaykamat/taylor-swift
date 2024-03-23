import ALBUMS from "../../database/ALBUM_AND_SONGS.json";
import { Song } from "../../types";

/**
 * Filters songs by the given album name.
 * @param {string} albumName - The name of the album to filter songs by.
 * @returns {Song[]} An array of songs belonging to the specified album.
 * @throws {Error} Thrown if the provided album name is invalid or the album is not found.
 */
const filterByAlbum = (albumName: string): Song[] => {
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
    return album.tracks as Song[];
  } else {
    // Return an empty array if the album has no tracks
    return [];
  }
};

export default filterByAlbum;
