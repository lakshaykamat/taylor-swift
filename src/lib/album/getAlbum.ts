import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { AlbumWithTracks } from "../../types";

/**
 * Retrieves an album by its name.
 * @param {string} albumName - The name of the album to retrieve.
 * @returns {AlbumWithTracks} The album object matching the provided name.
 * @throws {Error} Thrown if the provided album name is invalid or the album is not found.
 */
const getAlbum = (albumName: string): AlbumWithTracks => {
  // Input validation for albumName
  if (!albumName || typeof albumName !== "string" || albumName.trim() === "") {
    throw new Error("Invalid album name. Please specify a valid album name.");
  }

  // Case-insensitive search for album name
  const album = ALBUM_AND_SONGS.find(
    (a) => a.title.toLowerCase() === albumName.toLowerCase()
  );

  // Check if album exists
  if (!album) {
    throw new Error(`Album not found: '${albumName}'`);
  }

  // Return album
  return album as AlbumWithTracks;
};

export default getAlbum;
