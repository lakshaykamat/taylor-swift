import fs from "fs";
import { Album, Song } from "src/types";

/**
 * Remove specified properties from an album object.
 * @param {object} album - The album object to remove properties from.
 * @returns {object} An object with specified properties removed.
 */
export const removePropFromAlbum = (album: any): object => {
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
export const removePropFromSong = (song: any): object => {
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
export function writeDataToFile(data: any, filePath: string) {
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

export function compareReleaseDates(album1: Album, album2: Album): number {
  const [month1, day1, year1] = album1.releaseDate;
  const [month2, day2, year2] = album2.releaseDate;

  // Compare years
  if (year1 !== year2) {
    return year1 - year2;
  }

  // Compare months
  const monthOrder = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  const monthIndex1 = monthOrder[month1];
  const monthIndex2 = monthOrder[month2];
  if (monthIndex1 !== monthIndex2) {
    return monthIndex1 - monthIndex2;
  }

  // Compare days
  return day1 - day2;
}
