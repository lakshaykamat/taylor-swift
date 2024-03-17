# Taylor Swift

![Taylor Swift](https://i.pinimg.com/736x/29/da/be/29dabe61caa8e730005d62899bdd25f8.jpg)

## Introduction

Welcome to the Taylor Swift Package! This npm package provides various utilities and features related to Taylor Swift, her music, and her fanbase (affectionately known as "Swifties"). Whether you're a die-hard Taylor Swift fan or just curious about her work, this package has something for you.

## Installation

To install the Taylor Swift Package, simply use npm:

```bash
npm install taylor-swift
```

## Usage

Once installed, you can start using the Taylor Swift Package in your Node.js projects:

```javascript
const taylor = require("taylor-swift");
```

### Some Functions:

#### Get Random Taylor Swift Song:

```javascript
const randomSong = taylor.song.getRandomSong();
console.log(randomSong);
/*
Output
{
  name: 'Dear John',
  artist: 'Taylor Swift',
  duration: '6m 45s',
  lyrics: 'Long were the nights when\n' +
    'My days once revolved around you\n' +
    'Counting my footsteps...",
  album: 'Speak Now'
}
*/
```

#### Get Taylor Swift Album by Year:

```javascript
const album2008 = taylorSwiftPackage.getAlbumByYear(2008);
console.log(album2008);
/*
{
  title: 'Fearless',
  releaseDate: [ 'Nov', 11, 2008 ],
  albumCover: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_S
wift.png',
  artist: 'Taylor Swift',
  songCount: 25
}
 */
```

#### Get Taylor Swift Lyrics:

```javascript
const songLyrics = taylorSwiftPackage.getLyrics("Blank Space");
console.log(songLyrics); // Output: "Nice to meet you, where you been?..."
```

## Functions

The Taylor Swift Package includes several functions to interact with Taylor Swift's music and related information:

- `getRandomSong()`: Returns the name of a randomly selected Taylor Swift song.
- `getAlbumByYear(year)`: Takes a year as input and returns the album Taylor Swift released in that year.
- `getLyrics(songName)`: Takes the name of a Taylor Swift song as input and returns the lyrics for that song.
- And more!

<!-- For detailed usage instructions and additional functions, refer to the [API Documentation](#api-documentation) below. -->

<!-- ## API Documentation

For detailed documentation on all available functions and their usage, please refer to the [API Documentation](API.md). -->

## Contributing

Contributions to the Taylor Swift Package are welcome! Whether it's adding new features, fixing bugs, or improving documentation, every contribution helps make this package better. For more information on how to contribute, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

This package is maintained by [Lakshay Kamat](https://github.com/lakshaykamat/) and was inspired by the incredible work of Taylor Swift and her fans around the world.
