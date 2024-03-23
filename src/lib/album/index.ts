import filterByYear from "./filterByYear";
import getAlbum from "./getAlbum";
import getAllAlbums from "./getAlbums";
import randomAlbum from "./randomAlbum";

/**
 * A module for interacting with album data.
 * @namespace album
 */
const album = {
  /**
   * Filter albums by the given year.
   * @function
   * @memberof album
   */
  filterByYear,

  /**
   * Retrieve an album by its name.
   * @function
   * @memberof album
   */
  get: getAlbum,

  /**
   * Retrieve all albums from the database.
   * @function
   * @memberof album
   */
  all: getAllAlbums,

  /**
   * Retrieve a random album from the database.
   * @function
   * @memberof album
   */
  random: randomAlbum,
};

export default album;
