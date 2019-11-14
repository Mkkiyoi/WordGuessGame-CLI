/**
 * Creates a new Letter object representing a given letter.
 * @param {char} letter
 */
module.exports = function Letter(letter) {
  this.letter = letter;
  this.guessed = false;

  /**
   * Returns a string representation of the letter or
   * "_" if not already guessed.
   */
  this.toString = () => {
    if (this.guessed) {
      return this.letter;
    } else {
      return '_';
    }
  };

  /**
   * returns true if the letter passed in is the same as the letter stored,
   * otherwise returns false.
   */
  this.checkGuess = letter => {
    if (this.letter === letter) {
      this.guessed = true;
    }
    return this.guessed;
  };
};
