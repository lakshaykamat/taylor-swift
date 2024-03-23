import filterByAlbum from "./filterByAlbum";
import filterBySong from "./filterBySong";
import random from "./getRandom";

/**
 * A collection of functions for filtering and retrieving quotes.
 * @namespace quote
 */
const quote = {
  /**
   * Filter quotes by the given album name.
   * @function
   * @memberof quote
   * @param {string} albumName - The name of the album to filter quotes by.
   * @returns {Quote[]} An array of quotes filtered by the given album name.
   * @throws {Error} Thrown if the provided album name is invalid.
   */
  filterByAlbum,

  /**
   * Filter quotes by the given song name.
   * @function
   * @memberof quote
   * @param {string} songName - The name of the song to filter quotes by.
   * @returns {Quote[]} An array of quotes filtered by the given song name.
   * @throws {Error} Thrown if the provided song name is invalid.
   */
  filterBySong,

  /**
   * Retrieve a random quote.
   * @function
   * @memberof quote
   * @returns {Quote} A random quote.
   */
  random,
};

export default quote;
