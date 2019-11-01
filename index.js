let Word = require('./word.js');
let inquirer = require('inquirer');
let fs = require('fs');

let isGameOver = false;
let guesses = 10;
let wordChosen = '';
let lettersGuessed = [];
let correctWord = '';

let getWord = () => {
    isGameOver = false;
    fs.readFile('words_alpha.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let words = data.split('\n');
        let word = words[Math.floor(Math.random() * words.length)];
        guesses = word.length + 5;
        correctWord = word;
        wordChosen = new Word(word);
        playGame();
    });
}

let makeGuess = () => {
    inquirer.prompt([
        {
            name: 'guess',
            message: 'Guess a letter...'
        }
    ]).then((response) => {
        if (!lettersGuessed.includes(response.guess)) {
            isGameOver = wordChosen.guessLetter(response.guess);
            lettersGuessed.push(response.guess);
            playGame();
        } else {
            console.log('You already guessed ' + response.guess + '. Guess another Letter!');
            makeGuess();
        }
    });
}


let playGame = () => {
    console.log(wordChosen.displayWord());
    console.log('Letters guessed: ' + lettersGuessed);
    if (!isGameOver && guesses > 0) {
        console.log(guesses);
        guesses--;
        makeGuess();
    } else {
        if (isGameOver) {
            console.log('Congratulations!! You guessed the word correctly!')
        } else {
            console.log('Game Over... You lost...');
            console.log('The word was: ' + correctWord);
        }
        playAgain();
    }
}

let playAgain = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'playAgain',
            message: 'Do you want to play again?',
            default: false
        }
    ]).then((response) => {
        if (response.playAgain) {
            getWord();
        }
    });
}
getWord();

