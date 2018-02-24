var Letter = require('./letter.js');

function Word(wordTarget) {

    this.wordTarget = wordTarget;
    this.lettersInWordArr = [];
    this.wordCorrect = false;
    this.getLetters = function(){
        var targetLetter = this.wordTarget.split('');
        this.lettersInWordArr.push(targetLetter);
    };

    this.returnWordThroughChecker = function() {
        var nextWord = "";
        for (i=0; i < this.lettersInWordArr.length; i++) {
            wordToGuess = new Letter(this.lettersInWordArr[i]);
            wordToGuessNext = wordToGuess.hasItBeenGuessed();
            nextWord = nextWord.concat(wordToGuessNext + " ");
            //console.log(i);
            if (i === this.lettersInWordArr.length - 1) {
                console.log("Word separated into an array: " + this.lettersInWordArr);
                console.log("Word after sending through function: " + nextWord);
                
            }
        }
    }
    
    
    this.remainingLetters = this.wordTarget.length;
    this.checkForWin = function(){
        if(this.remainingLetters === 0) {
            this.wordCorrect = true;
        }
    };
};

module.exports = Word;

//CAN CREATE A NEW WORD VARIABLE THAT TAKES A STRING AND SPLITS IT 
//INTO AN ARRAY OF LETTERS. CAN THEN DISPLAY THE ARRAY OF LETTERS.
//THINGS GET MUDDY HERE. CANNOT DISPLAY LETTERS OF ARRAY AS UNDERSCORES
//VIA THE HASITBENGUESSED FUNCTION FROM LETTER.JS.

/*var wordTest = new Word("baloon");
console.log('--------------------');
console.log("Underlying Word: " + wordTest.wordTarget);
wordTest.getLetters();
console.log("Letter array: " + wordTest.lettersInWordArr);
wordTest.returnWordThroughChecker();
console.log('--------------------');*/

//test.remainingLetters = 0;
//test.checkForWin();
//console.log("Guessed? " + test.wordCorrect)