import QUOTES from "../../database/quotes.json";
import { Quote } from "../../types";

/**
 * Filters quotes by the given album name.
 * @param {string} albumName - The name of the album to filter quotes by.
 * @returns {Quote[]} An array of quotes filtered by the given album name.
 * @throws {Error} Thrown if the provided album name is invalid.
 */
const filterByAlbum = (albumName: string): Quote[] => {
  // Input validation for albumName
  if (!albumName || typeof albumName !== "string" || albumName.trim() === "") {
    throw new Error("Invalid album name. Please specify a valid album name.");
  }

  // Filter quotes by the given album name
  return QUOTES.filter(
    (q) => q.album.toLowerCase() === albumName.toLowerCase()
  ) as Quote[];
};

export default filterByAlbum;
