const Letter = require("./letter.js");

function Word(letterArray) {
    this.letterArray = letterArray;
    this.letterString = function() {
        var nextWord = "";
        for(let i = 0; i < letterArray.length; i++) {
            let word = new Letter(letterArray[i]);
            let aWord = word.hasItBeenGuessed();
            //let anotherWord = " ";
            //console.log(aWord);
            nextWord = nextWord.concat(aWord + " ");
            //console.log(i);
            if (i === letterArray.length - 1) {
                showString();
            }
        } 
        
        function showString() {
            console.log(nextWord);
        }
    }
  /*  this.checkThroughString = function(guessLetter) {
        for (i=0; i<letterArray.length; i++) {
            let guessLetter = new Letter(letterArray[i]);
            let checkGuess = guessLetter.characterCheck(guessLetter);
            
            
        }
    }*/
}

module.exports = Word

const newWord = new Word("FIT");
//newWord.checkThroughString("I");
newWord.letterString()