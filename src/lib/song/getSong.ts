import ALBUM_AND_SONGS from "../../database/ALBUM_AND_SONGS.json";
import { Song } from "../../types";

/**
 * Retrieves a song by its name.
 * @param {string} songName - The name of the song to retrieve.
 * @returns {Song|null} The song object matching the provided name, or null if not found.
 */
const getSong = (songName: string): Song | null => {
  // Input validation for songName
  if (!songName || typeof songName !== "string" || songName.trim() === "") {
    throw new Error("Invalid song name. Please specify a valid song name.");
  }

  // Convert songName to lowercase for case-insensitive search
  const lowercaseSongName = songName.toLowerCase();

  // Find the song in the data
  const foundSong = ALBUM_AND_SONGS.flatMap((album) => album.tracks) // Flatten the array of tracks
    .find((song) => song.name.toLowerCase() === lowercaseSongName); // Case-insensitive search

  return (foundSong as Song) || null; // Return the found song or null if not found
};

export default getSong;
