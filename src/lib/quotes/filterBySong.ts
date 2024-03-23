import QUOTES from "../../database/quotes.json";
import { Quote } from "../../types";

/**
 * Filters quotes by the given song name.
 * @param {string} songName - The name of the song to filter quotes by.
 * @returns {Quote[]} An array of quotes filtered by the given song name.
 * @throws {Error} Thrown if the provided song name is invalid.
 */
const filterBySong = (songName: string): Quote[] => {
  // Input validation for songName
  if (!songName || typeof songName !== "string" || songName.trim() === "") {
    throw new Error("Invalid song name. Please specify a valid song name.");
  }

  // Filter quotes by the given song name
  return QUOTES.filter(
    (q) => q.song.toLowerCase() === songName.toLowerCase()
  ) as Quote[];
};

export default filterBySong;
