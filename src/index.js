// Node module imports
let Word = require('./word'),
  inquirer = require('inquirer'),
  fs = require('fs'),
  clear = require('clear');
// Global variable definitions.
let isGameOver, guesses, wordChosen, lettersGuessed, correctWord;

/**
 * getWord reads the words_alpha.txt file and chooses a random word to use for the game.
 * After a word is chosen, it calls playGame to initiate game functionality.
 */
module.exports = getWord = () => {
  clear();
  isGameOver = false;
  lettersGuessed = [];
  fs.readFile('./assets/text/words_alpha.txt', 'utf8', (err, data) => {
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
};

/**
 * makeGuess prompts the player to make a guess.
 * If the letter chosen has already been guessed, prompt the player to guess a different letter.
 */
let makeGuess = () => {
  inquirer
    .prompt([
      {
        name: 'guess',
        message: 'Guess a letter...'
      }
    ])
    .then(response => {
      if (!lettersGuessed.includes(response.guess)) {
        isGameOver = wordChosen.guessLetter(response.guess);
        lettersGuessed.push(response.guess);
        playGame();
      } else {
        console.log(
          'You already guessed ' + response.guess + '. Guess another Letter!'
        );
        makeGuess();
      }
    });
};

/**
 * playGame contains the basic game loop.
 * Checks if the game is over. If not, calls makeGuess.
 * If the game is over, prints an endgame message and calls playAgain.
 */
let playGame = () => {
  clear();
  console.log(wordChosen.displayWord());
  console.log('Letters guessed: ' + lettersGuessed);
  if (!isGameOver && guesses > 0) {
    console.log('Guesses Left: ' + guesses);
    guesses--;
    makeGuess();
  } else {
    if (isGameOver) {
      clear();
      console.log('Congratulations!! You guessed the word correctly!');
    } else {
      clear();
      console.log('Game Over... You lost...');
      console.log('The word was: ' + correctWord);
    }
    playAgain();
  }
};

/**
 * playAgain asks the player if they want to play again.
 * If they do, call getWord to reinitiate the game.
 * If not the game terminates.
 */
let playAgain = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'playAgain',
        message: 'Do you want to play again?',
        default: false
      }
    ])
    .then(response => {
      if (response.playAgain) {
        getWord();
      }
    });
};
