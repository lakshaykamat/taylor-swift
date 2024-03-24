import album from "./lib/album";
import song from "./lib/song";
import quote from "./lib/quotes";
import { Album, Song, AlbumWithTracks, Quote } from "./types";

const taylor = {
  album,
  quote,
  song,
};
export default taylor;
export { Album, Song, AlbumWithTracks, Quote };
