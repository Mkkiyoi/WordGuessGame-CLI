// Node module import
let Letter = require('./letter.js');

/**
 * Creates a new Word object from a given word.
 * @param {String} word 
 */
let Word = function(word) {

    // Array storing Letter objects representing each letter of the given word.
    this.letters = [];

    // Push a new Letter object for each letter in the word. 
    let wordLetters = word.trim().split('');
    wordLetters.forEach((letter) => {
        this.letters.push(new Letter(letter));
    });

    /**
     * displayWord returns the string representation of the given word.
     * Utilizes the Letter objects toString method.
     */
    this.displayWord = function() {
        let output = [];
        this.letters.forEach(function(letter) {
            output.push(letter);
        });
        return output.join(' ');
    }
    
    /**
     * guessLetter checks if the current guess matches any of the letters of the word.
     * Returns true if all the letters have been guessed correctly.
     * Returns false otherwise.
     */
    this.guessLetter = function(guess) {
        let guessedAllLetters = true;
        this.letters.forEach((letter) => {
            if (!letter.checkGuess(guess)) {
                guessedAllLetters = false;
            }
        });
        return guessedAllLetters;
    }

}

// Export Word constructor as a node module.
module.exports = Word;