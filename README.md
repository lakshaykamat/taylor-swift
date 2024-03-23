# Taylor Swift Library

![Taylor Swift](https://www.nme.com/wp-content/uploads/2023/06/taylor-swift-2000x1270-1-696x442.jpg)

## Installation

Install the Taylor Swift Library via npm:

```bash
npm install taylor-swift
```

## Usage

Start using the Taylor Swift Library in your Node.js projects:

```javascript
const taylor = require("taylor-swift");
// or
const { song, quote, album } = require("taylor-swift");
```

The Taylor Swift Library provides functions for interacting with Taylor Swift's music and related information:

### Songs

- `song.random()`: Returns a random Taylor Swift song.
- `song.filterByAlbum(year)`: Returns songs released by Taylor Swift in a specific year.
- `song.get(songName)`: Returns lyrics of a Taylor Swift song by its name.
- `song.all()`: Returns all songs by Taylor Swift.

### Albums

- `album.filterByYear(year)`: Returns albums released by Taylor Swift in a given year.
- `album.get(albumName)`: Returns a specific Taylor Swift album by name.
- `album.all()`: Returns all Taylor Swift albums.
- `album.random()`: Returns a randomly selected Taylor Swift album.

### Quotes

- `quote.random()`: Returns a randomly selected Taylor Swift quote.
- `quote.filterBySong(songName)`: Returns quotes from a Taylor Swift song by its name.
- `quote.filterByAlbum(albumName)`: Returns quotes from a Taylor Swift album by its name.

## Example

### Random Taylor Swift Song:

```javascript
const randomSong = taylor.song.random();
console.log(randomSong);
```

### Taylor Swift Album by Year:

```javascript
const album2008 = taylor.album.filterByYear(2008);
console.log(album2008);
```

## Credits

Maintained by [Lakshay Kamat](https://github.com/lakshaykamat/), inspired by the work of Taylor Swift and her fans worldwide.
