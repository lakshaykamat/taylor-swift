import fs from "fs";

/**
 * Remove specified properties from an album object.
 * @param {object} album - The album object to remove properties from.
 * @returns {object} An object with specified properties removed.
 */
export const removePropFromAlbum = (album) => {
  return {
    title: album.title,
    releaseDate: album.releaseDate,
    albumCover: album.albumCover,
    artist: album.artist,
  };
};

/**
 * Remove specified properties from a song object.
 * @param {object} song - The song object to remove properties from.
 * @returns {object} An object with specified properties removed.
 */
export const removePropFromSong = (song) => {
  return {
    name: song.name,
    artist: song.artist,
    duration: song.duration,
    lyrics: song.lyrics,
    album: song.album,
  };
};

/**
 * Write data to a file.
 * @param {string|object} data - The data to write to the file.
 * @param {string} filePath - The file path to write data to.
 */
export function writeDataToFile(data, filePath) {
  // Convert the data to string format
  const dataString =
    typeof data === "string" ? data : JSON.stringify(data, null, 2);

  // Write data to the file
  fs.writeFile(filePath, dataString, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log("Data has been written to", filePath);
  });
}
