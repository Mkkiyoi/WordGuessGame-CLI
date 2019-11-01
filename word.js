let Letter = require('./letter.js');

let Word = function(word) {
    this.letters = [];
    let wordLetters = word.trim().split('');
    wordLetters.forEach((letter) => {
        this.letters.push(new Letter(letter));
    });

    this.displayWord = function() {
        let output = [];
        this.letters.forEach(function(letter) {
            output.push(letter);
        });
        return output.join(' ');
    }
    
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

module.exports = Word;