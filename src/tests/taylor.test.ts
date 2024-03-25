import taylor from "../index";
import { Album, AlbumWithTracks, Song, Quote } from "../types";

// Type guard function to check if an object conforms to a specific type
function isType<T>(obj: any, keys: (keyof T)[]): obj is T {
  return keys.every((key) => key in obj);
}

describe("taylor module", () => {
  test("should return a random album", () => {
    const randomAlbum = taylor.album.random();
    expect(
      isType<Album>(randomAlbum, [
        "title",
        "releaseDate",
        "albumCover",
        "artist",
      ])
    ).toBe(true);
  });

  test("should return an album", () => {
    const album = taylor.album.get("1989");
    expect(
      isType<AlbumWithTracks>(album, [
        "title",
        "releaseDate",
        "albumCover",
        "artist",
        "tracks",
      ])
    ).toBe(true);
  });

  test("should return filtered albums", () => {
    const albums = taylor.album.filterByYear(2008);
    expect(Array.isArray(albums)).toBe(true);
    albums.forEach((album) => {
      expect(
        isType<AlbumWithTracks>(album, [
          "title",
          "releaseDate",
          "albumCover",
          "artist",
          "tracks",
        ])
      ).toBe(true);
    });
  });

  test("should filter songs by album", () => {
    const albumName = "Lover"; // Example album name
    const songsByAlbum = taylor.song.filterByAlbum(albumName);
    expect(
      songsByAlbum.every((song) =>
        isType<Song>(song, ["name", "artist", "duration", "lyrics", "album"])
      )
    ).toBe(true);
  });

  test("should retrieve a song by name", () => {
    const songName = "Blank Space"; // Example song name
    const foundSong = taylor.song.get(songName);
    expect(
      isType<Song>(foundSong, ["name", "artist", "duration", "lyrics", "album"])
    ).toBe(true);
  });

  test("should retrieve all songs", () => {
    const allSongs = taylor.song.all();
    expect(
      allSongs.every((song) =>
        isType<Song>(song, ["name", "artist", "duration", "lyrics", "album"])
      )
    ).toBe(true);
  });

  test("should return a random quote", () => {
    const randomQuote = taylor.quote.random();
    expect(isType<Quote>(randomQuote, ["quote", "song", "album"])).toBe(true);
  });

  test("should filter quotes by song", () => {
    const songName = "Love Story"; // Example song name
    const quotesBySong = taylor.quote.filterBySong(songName);
    expect(
      quotesBySong.every((quote) =>
        isType<Quote>(quote, ["quote", "song", "album"])
      )
    ).toBe(true);
  });

  test("should filter quotes by album", () => {
    const albumName = "Fearless"; // Example album name
    const quotesByAlbum = taylor.quote.filterByAlbum(albumName);
    expect(
      quotesByAlbum.every((quote) =>
        isType<Quote>(quote, ["quote", "song", "album"])
      )
    ).toBe(true);
  });

  test("should throw error when filtering songs with invalid album name", () => {
    expect(() => {
      taylor.song.filterByAlbum("");
    }).toThrow("Invalid album name. Please specify a valid album name.");
  });

  test("should throw error when retrieving song with invalid name", () => {
    expect(() => {
      taylor.song.get("");
    }).toThrow("Invalid song name. Please specify a valid song name.");
  });

  test("should return an empty array when filtering songs by non-existent album", () => {
    expect(() => {
      taylor.song.filterByAlbum("NonExistentAlbum");
    }).toThrow(`Album not found: 'NonExistentAlbum'`);
  });

  test("should return null when retrieving non-existent song", () => {
    const nonExistentSong = taylor.song.get("NonExistentSong");
    expect(nonExistentSong).toBeNull();
  });
});
