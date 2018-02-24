var inquirer = require("inquirer");
var Word = require("./word.js");

var letterGuesses = [];
var gameWord;

var wordList = ["cat","car","boy","emu","sit","jaw","gym"];


var remainingGuesses = 5,

    startGame = function () {

        var targetWord = wordList[Math.floor(Math.random() * wordList.length)]
        console.log("--------------------------------------------------------------------")
        console.log("Welcome to Three-Letter Hangman. Try to guess the really simple word.")
        console.log("Word to guess before feeding through functions: " + targetWord);
        console.log("Guesses left: " + remainingGuesses);
        console.log("--------------------------------------------------------------------")

        gameWord = new Word(targetWord);
        gameWord.getLetters();
        gameWord.returnWordThroughChecker();
        gameWord.checkForWin();
        // console.log("test " + gameWord.checkLetter(userInput));

        getUserGuess();

    }


function getUserGuess() {
    console.log("\n");

    if (remainingGuesses > 0) {
        inquirer.prompt([
            {
                type: "value",
                name: "letter",
                message: "Guess a Letter: "
            }
        ]).then(function (userInput) {
            var userLetter = userInput.letter.toLowerCase();

            if (isLetter(userLetter) === false) {
                console.log(userLetter + " is not a letter. Try again.\n");
                console.log("Guesses left: " + remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");

                getUserGuess();
            } else if (isLetter(userLetter) === true && letterGuesses.indexOf(userLetter) != -1) {
                console.log("Already guessed " + userLetter + " Try again.");
                console.log("Guesses left: " + remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");
            } else {
                letterGuesses.push(userLetter);

                // var letterInWord = Word.displayWord.checkLetter(userLetter);
                console.log(displayWord);
            }
        })
    }
}
startGame();

//RUNNING INDEX.JS CAN SELECT A RANDOM WORD FROM WORD BANK AND THEN
//RUN IT THROUGH WORD.JS TO SEPARATE IT INTO A STRING OF LETTERS.
//HOWEVER, THE PROBLEM FROM WORD.JS CARRIES OVER IN THAT I CAN NOT
//DISPLAY THE WORD AS UNDERSCORES BECAUSE IT STOPS RUNNING THROUGH
//THAT FUNCTION AFTER THE FIRST LETTER. SO FAR, THIS IS WHERE I'VE
//MADE IT. ONCE THAT IS WORKING, CAN WORK MORE ON INQUIRER TAKING
//IN GUESSES AND CHECKING THEM.