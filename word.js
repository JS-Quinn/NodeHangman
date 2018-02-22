var Letter = require('./letter.js');

function Word(wordTarget) {

    this.wordTarget = wordTarget;
    this.lettersInWordArr = [];
    this.wordCorrect = false;

    this.returnWordAsString = function() {

        return this.wordTarget
    }

    this.getLetters = function(){
            var targetLetter = this.wordTarget.split('');
            this.lettersInWordArr.push(targetLetter);
    };

    this.remainingLetters = this.wordTarget.length;

    this.checkForWin = function(){
        if(this.remainingLetters === 0) {
            this.wordCorrect = true;
        }
    };
};

module.exports = Word;

var wordTest = new Word("baloon");
console.log('--------------------');
console.log("Underlying Word: " + wordTest.wordTarget);
wordTest.getLetters();
console.log("Letter array: " + wordTest.lettersInWordArr);
wordTest.returnWordAsString();
//console.log("Guessed? " + wordTest.wordCorrect);
console.log('--------------------');
//test.remainingLetters = 0;
//test.checkForWin();
//console.log("Guessed? " + test.wordCorrect)