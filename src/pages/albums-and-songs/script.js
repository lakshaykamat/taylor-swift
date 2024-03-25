// Define the removePropFromAlbum function
const removePropFromAlbum = (album) => {
  return {
    title: album.title,
    releaseDate: album.releaseDate,
    albumCover: album.albumCover,
    artist: album.artist,
    tracks: album.tracks,
  };
};

// Helper function to convert month name to number
function monthToNumber(monthName) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months.indexOf(monthName);
}

// Function to compare release dates
function compareReleaseDates(albumA, albumB) {
  // Extract the release dates from the albums
  const releaseDateA = new Date(
    albumA.releaseDate[2],
    monthToNumber(albumA.releaseDate[0]),
    albumA.releaseDate[1]
  );
  const releaseDateB = new Date(
    albumB.releaseDate[2],
    monthToNumber(albumB.releaseDate[0]),
    albumB.releaseDate[1]
  );

  // Compare the release dates
  if (releaseDateA < releaseDateB) {
    return -1;
  } else if (releaseDateA > releaseDateB) {
    return 1;
  } else {
    return 0;
  }
}

// Define an immediately invoked async function expression (IIFE)
(async () => {
  try {
    // Fetch the JSON file
    const response = await fetch("../../database/ALBUM_AND_SONGS.json");
    // Parse the JSON data
    const albumAndSongs = await response.json();
    // Map the parsed JSON data using removePropFromAlbum
    const albums = albumAndSongs.map(removePropFromAlbum);
    // Sort the albums by release date
    albums.sort(compareReleaseDates);
    // Log the sorted albums
    console.log(albums);

    // Get the container element to append albums
    const container = document.getElementById("albums-container");
    container.classList.add("flex", "gap-5");
    // Iterate through the albums array and create elements for each album
    albums.forEach((album) => {
      // Create elements for the album
      const albumDiv = document.createElement("div");
      const textDiv = document.createElement("div");
      textDiv.classList.add("text-container");
      albumDiv.classList.add("album", "flex", "gap-3");

      const albumImage = document.createElement("img");
      albumImage.src = album.albumCover;
      albumImage.alt = album.title;
      albumImage.classList.add("album-image", "w-28", "rounded-md");

      const albumTitle = document.createElement("h2");
      albumTitle.textContent = album.title;
      albumTitle.classList.add("album-title", "text-xl", "font-semibold");

      const albumArtist = document.createElement("p");
      albumArtist.textContent = `${album.artist}`;
      albumArtist.classList.add("album-artist", "text-gray-600");

      const albumReleaseDate = document.createElement("p");
      albumReleaseDate.textContent = `${album.releaseDate.join(" ")}`;
      albumReleaseDate.classList.add(
        "album-release-date",
        "text-gray-600",
        "text-sm"
      );

      // Append elements to the album container

      textDiv.appendChild(albumTitle);
      textDiv.appendChild(albumArtist);
      textDiv.appendChild(albumReleaseDate);

      albumDiv.appendChild(albumImage);
      albumDiv.appendChild(textDiv);
      container.appendChild(albumDiv);
    });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching JSON:", error);
  }
})();
