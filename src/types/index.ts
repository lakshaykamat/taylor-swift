export type Album = {
  title: string;
  releaseDate: [string, number, number]; // Tuple type for releaseDate
  albumCover: string;
  artist: string;
};
export type AlbumWithTracks = {
  title: string;
  releaseDate: [string, number, number]; // Tuple type for releaseDate
  albumCover: string;
  artist: string;
  tracks: Song[];
};
export type Song = {
  name: string;
  artist: string;
  duration: string;
  lyrics: string;
  album: string;
};

export type Quote = {
  quote: string;
  album: string;
  song: string;
};
