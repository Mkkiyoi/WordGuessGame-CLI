let Letter = require('./letter');

let Word = (word) => {
    let wordChars = word.split('');
    this.letters = [];
    wordChars.forEach((char) => {
        this.letters.push(new Letter(char));
    });

    this.displayWord = () => {
        let output = [];
        this.letters.forEach((letter) => {
            output.push(letter);
        });
        return output.join(' ');
    }
    
    this.guessLetter = (guess) => {
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