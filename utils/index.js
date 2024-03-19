const fs = require("fs");

const removePropFromAlbum = (album) => {
  return {
    title: album.title,
    releaseDate: album.releaseDate,
    albumCover: album.albumCover,
    artist: album.artist
  };
};
const removePropFromSong = (song) => {
  return {
    name: song.name,
    artist: song.artist,
    duration: song.duration,
    lyrics: song.lyrics,
    album: song.album,
  };
};

// Function to write data to a file
function writeDataToFile(data, filePath) {
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
module.exports = {
  removePropFromAlbum,
  removePropFromSong,
  writeDataToFile,
};
