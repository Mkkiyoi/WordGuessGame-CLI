let Word = require('./word');
let inquirer = require('inquirer');
let fs = require('fs');

let getWord = () => {
    fs.readFile('words_alpha.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let words = data.split('\n');
        return words[Math.floor(Math.random() * words.length)];
    });
}

let wordChosen = new Word(getWord());

let makeGuess = () => {
    inquirer.prompt([
        {
            name: 'guess',
            message: 'Guess a letter...'
        }
    ]).then((response) => {
        return wordChosen.guessLetter(response.guess);
    });
}

let playGame = () => {
    console.log(wordChosen.displayWord());
}

