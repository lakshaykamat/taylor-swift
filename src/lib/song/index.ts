import filterByAlbum from "./filterByAlbum";
import getRandomSong from "./getRandomTaylorSong";
import getSong from "./getSong";
import getSongs from "./getSongs";

/**
 * A module for interacting with song data.
 * @namespace song
 */
const song = {
  /**
   * Retrieve a random song.
   * @function
   * @memberof song
   */
  random: getRandomSong,

  /**
   * Filter songs by the given album name.
   * @function
   * @memberof song
   */
  filterByAlbum,

  /**
   * Retrieve a song by its name.
   * @function
   * @memberof song
   */
  get: getSong,

  /**
   * Retrieve all songs from the database.
   * @function
   * @memberof song
   */
  all: getSongs,
};

export default song;
