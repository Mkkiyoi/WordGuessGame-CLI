# WordGuessGame-CLI

## **What is WordGuessGame-CLI?**

- A Node based CLI (Command Line Interface) word guessing game.
  - To win the game players have a certain number of guess to correctly guess
    the letters in a randomly selected word.
  - Players provide input via the keyboard to choose letters and interact with
    the prompts.
- WordGuessGame-CLI is an example of using node modules to break down code into
  more managable pieces and also an example of using inquirer to prompt input
  from the user.
  - While a simple game concept, WordGuessGame-CLI is a great example of basic
    game logic and the complexity of multiple game states.

## **Using WordGuessGame-CLI**

- Before running WordGuessGame-CLI, you will need to run `npm install` in the
  directory containing the files in this repo.

  - This will install `inquirer` which is required to play the game.
  - This will also install `clear` which helps the game visually in the command
    line.

- To play the game, run `node index` or `npm start` in the command line
  interface you are using.
  - **NOTE**: You must be in the same directory that contains the `package.json`
    to run this command. Otherwise you must provide the relative path to the
    files to run this.

## **Examples Using WordGuessGame-CLI**

Example of guessing the word correctly.
![WordGuessGame-CLI-Example-Correct.gif](assets/images/WordGuessGame-CLI-Example-Correct.gif)

Example of guessing the word incorrectly.
![WordGuessGame-CLI-Example-Incorrect.gif](assets/images/WordGuessGame-CLI-Example-Incorrect.gif)

## **Node Modules used in WordGuessGame-CLI**

- [fs](https://nodejs.org/api/fs.html)
- [inquirer](https://www.npmjs.com/package/inquirer)

## **Assets**

- Javascript for the main node application can be found [here](index.js).
- Javascript for the Letter constructor can be found [here](letter.js).
- Javascript for the Word constructor can be found [here](word.js).
