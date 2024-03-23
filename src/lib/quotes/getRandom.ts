import QUOTES from "../../database/quotes.json";
import { Quote } from "../../types";

/**
 * Retrieves a random quote from the taylor swift album.
 * @returns {Quote} A random quote object.
 */
const getRandom = (): Quote => {
  // Generate a random index to select a random quote
  const randomIndex = Math.floor(Math.random() * QUOTES.length);

  // Return the randomly selected quote
  return QUOTES[randomIndex] as Quote;
};

export default getRandom;
