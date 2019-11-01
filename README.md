# WordGuessGame-CLI

## __What is WordGuessGame-CLI?__
* A Node based CLI (Command Line Interface) word guessing game.
  * To win the game players have a certain number of guess to correctly guess the letters in a randomly selected word.
  * Players provide input via the keyboard to choose letters and interact with the prompts.
* WordGuessGame-CLI is an example of using node modules to break down code into more managable pieces and also an example of using inquirer to prompt input from the user.
  * While a simple game concept, WordGuessGame-CLI is a great example of basic game logic and the complexity of multiple game states.

## __Using WordGuessGame-CLI__

* Before running WordGuessGame-CLI, you will need to run `npm install` in the directory containing the files in this repo. 
  * This will install `inquirer` which is required to play the game.

* To play the game, run `node index` in the command line interface you are using. 
  * __NOTE__: You must be in the same directory that contains the `javascript files` to run this command. Otherwise you must provide the relative path to the files to run this.


## __Examples Using WordGuessGame-CLI__
Example of guessing the word correctly.
![WordGuessGame-CLI-Example-Correct.gif](assets/images/WordGuessGame-CLI-Example-Correct.gif)

Example of guessing the word incorrectly.
![WordGuessGame-CLI-Example-Incorrect.gif](assets/images/WordGuessGame-CLI-Example-Incorrect.gif)

## __Node Modules used in WordGuessGame-CLI__
* [fs](https://nodejs.org/api/fs.html)
* [inquirer]((https://www.npmjs.com/package/inquirer))

## __Assets__
* Javascript for the main node application can be found [here](index.js).
* Javascript for the Letter constructor can be found [here](letter.js).
* Javascript for the Word constructor can be found [here](word.js).




