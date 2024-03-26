import { album, song, quote } from "../index";
import { Album, AlbumWithTracks, Song, Quote } from "../types";

// Type guard function to check if an object conforms to a specific type
function isType<T>(obj: any, keys: (keyof T)[]): obj is T {
  return keys.every((key) => key in obj);
}

describe("taylor module", () => {
  test("should return a random album", () => {
    const randomAlbum = album.random();
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
    expect(
      isType<AlbumWithTracks>(album.get("1989"), [
        "title",
        "releaseDate",
        "albumCover",
        "artist",
        "tracks",
      ])
    ).toBe(true);
  });

  test("should return filtered albums", () => {
    const albums = album.filterByYear(2008);
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
    const songsByAlbum = song.filterByAlbum(albumName);
    expect(
      songsByAlbum.every((song) =>
        isType<Song>(song, ["name", "artist", "duration", "lyrics", "album"])
      )
    ).toBe(true);
  });

  test("should retrieve a song by name", () => {
    const songName = "Blank Space"; // Example song name
    const foundSong = song.get(songName);
    expect(
      isType<Song>(foundSong, ["name", "artist", "duration", "lyrics", "album"])
    ).toBe(true);
  });

  test("should retrieve all songs", () => {
    const allSongs = song.all();
    expect(
      allSongs.every((song) =>
        isType<Song>(song, ["name", "artist", "duration", "lyrics", "album"])
      )
    ).toBe(true);
  });

  test("should return a random quote", () => {
    const randomQuote = quote.random();
    expect(isType<Quote>(randomQuote, ["quote", "song", "album"])).toBe(true);
  });

  test("should filter quotes by song", () => {
    const songName = "Love Story"; // Example song name
    const quotesBySong = quote.filterBySong(songName);
    expect(
      quotesBySong.every((quote) =>
        isType<Quote>(quote, ["quote", "song", "album"])
      )
    ).toBe(true);
  });

  test("should filter quotes by album", () => {
    const albumName = "Fearless"; // Example album name
    const quotesByAlbum = quote.filterByAlbum(albumName);
    expect(
      quotesByAlbum.every((quote) =>
        isType<Quote>(quote, ["quote", "song", "album"])
      )
    ).toBe(true);
  });

  test("should throw error when filtering songs with invalid album name", () => {
    expect(() => {
      song.filterByAlbum("");
    }).toThrow("Invalid album name. Please specify a valid album name.");
  });

  test("should throw error when retrieving song with invalid name", () => {
    expect(() => {
      song.get("");
    }).toThrow("Invalid song name. Please specify a valid song name.");
  });

  test("should return an empty array when filtering songs by non-existent album", () => {
    expect(() => {
      song.filterByAlbum("NonExistentAlbum");
    }).toThrow(`Album not found: 'NonExistentAlbum'`);
  });

  test("should return null when retrieving non-existent song", () => {
    const nonExistentSong = song.get("NonExistentSong");
    expect(nonExistentSong).toBeNull();
  });
});
