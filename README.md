# Taylor Swift Library

![Taylor Swift](https://news.harvard.edu/wp-content/uploads/2023/07/202307x_swift_1407_AP23198726852529.jpg)

## Introduction

Welcome to the Taylor Swift Library! This npm package provides various utilities and features related to Taylor Swift, her music, albums, and quotes for her fanbase, affectionately known as "Swifties". Whether you're a die-hard Taylor Swift fan or just curious about her work, this package has something for you.

## Installation

To install the Taylor Swift Library, simply use npm:

```bash
npm install taylor-swift
```

## Usage

Once installed, you can start using the Taylor Swift Library in your Node.js projects:

```javascript
const taylor = require("taylor-swift");
// or
const { song, quote, album } = require("taylor-swift");
```

### Some Functions:

#### Get Random Taylor Swift Song:

```javascript
const randomSong = taylor.song.random();
console.log(randomSong);
/*
Output
{
  name: 'Dear John',
  artist: 'Taylor Swift',
  duration: '6m 45s',
  lyrics: 'Long were the nights when\n' +
    'My days once revolved around you\n' +
    'Counting my footsteps...',
  album: 'Speak Now'
}
*/
```

#### Get Taylor Swift Album by Year:

```javascript
const album2008 = taylor.album.filterByYear(2008);
console.log(album2008);
/*
{
  title: 'Fearless',
  releaseDate: [ 'Nov', 11, 2008 ],
  albumCover: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_S
wift.png',
  artist: 'Taylor Swift',
  tracks:[
    // Array of songs
  ]
}
 */
```

## Functions

The Taylor Swift Library includes several functions to interact with Taylor Swift's music and related information:

### Songs
- `song.random()`: Returns a randomly selected Taylor Swift song.
- `song.filterByAlbum(year)`: Takes a year as input and returns the songs of Taylor Swift released in that year.
- `song.getSong(songName)`: Takes the name of a Taylor Swift song as input and returns the lyrics for that song.
- And more!
### Albums
- `album.filterByYear(year)`: Takes a year as input and returns the albums Taylor Swift released in that year.
- `album.getAlbum(albumName)`: Takes the name of a Taylor Swift album as input and returns that album.
### Quote
- `quote.random()`: Returns a randomly selected Taylor Swift quote.
- `quote.filterBySong(songName)`: Takes the name of a Taylor Swift song as input and returns the quotes in that song.
- `quote.filterByAlbum(albumName)`: Takes the name of a Taylor Swift album as input and returns the quotes from that album.

## Contributing

Contributions to the Taylor Swift Library are welcome! Whether it's adding new features, fixing bugs, or improving documentation, every contribution helps make this library better. For more information on how to contribute, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

This package is maintained by [Lakshay Kamat](https://github.com/lakshaykamat/) and was inspired by the incredible work of Taylor Swift and her fans around the world.