let Letter = (letter) => {
    this.letter = letter;
    this.guessed = false;
    this.toString = () => {
        if (this.guessed) {
            return this.letter;
        } else {
            return '_';
        }
    }
    this.checkGuess = (letter) => {
        if (this.letter === letter) {
            this.guessed = true;
        }
        return this.guessed;
    }
}

module.exports = Letter;

