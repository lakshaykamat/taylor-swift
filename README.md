# taylor-swift v3.3.0

![Taylor Swift](https://www.nme.com/wp-content/uploads/2023/06/taylor-swift-2000x1270-1-696x442.jpg)

## Installation

Install the Taylor Swift Library via npm:

```bash
npm install taylor-swift
```

## Usage

Start using the Taylor Swift Library in your Node.js projects:

```javascript
const { song, album, quote } = require("taylor-swift");
```

The Taylor Swift Library provides functions for interacting with Taylor Swift's music and related information:

### Songs

| **Funtcion**                    | **Description**                                             |
| ------------------------------- | ----------------------------------------------------------- |
| `song.random()`                 | Returns a random Taylor Swift song.                         |
| `song.filterByAlbum(albumName)` | Returns songs released by Taylor Swift in a specific album. |
| `song.all()`                    | Returns all songs by Taylor Swift.                          |
| `song.get(songName)`            | Returns a Taylor Swift song by its name.                    |

### Albums

| **Funtcion**               | **Description**                                          |
| -------------------------- | -------------------------------------------------------- |
| `album.random()`           | Returns a randomly selected Taylor Swift album.          |
| `album.all()`              | Returns all Taylor Swift albums.                         |
| `album.get(albumName)`     | Returns a specific Taylor Swift album by name.           |
| `album.filterByYear(year)` | Returns albums released by Taylor Swift in a given year. |

### Quote

| **Funtcion**                     | **Description**                                       |
| -------------------------------- | ----------------------------------------------------- |
| `quote.random()`                 | Returns a randomly selected Taylor Swift quote.       |
| `quote.filterBySong(songName)`   | Returns quotes from a Taylor Swift song by its name.  |
| `quote.filterByAlbum(albumName)` | Returns quotes from a Taylor Swift album by its name. |

## Example

### Random Taylor Swift Song:

```javascript
const randomSong = song.random();
console.log(randomSong);
```

### Taylor Swift Album by Year:

```javascript
const album2008 = album.filterByYear(2008);
console.log(album2008);
```

## Credits

Maintained by [Lakshay Kamat](https://github.com/lakshaykamat/), inspired by the work of Taylor Swift and her fans worldwide.
