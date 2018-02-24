var Letter = function(character) {
    this.character = character,
    this.guessState = false,
    this.characterCheck = function(letterGuessed) {
        if (letterGuessed === this.character) {
            this.guessState = true;
        }
    }
    this.hasItBeenGuessed = function() {
        if (this.guessState === true) {
            return this.character;
        } else {
            return "_";
        }
    } 
}

module.exports = Letter

//LETTER.JS FUNCTIONS FROM A TESTING PERSPECTIVE. YOU CAN USE THE BELOW
//CONSOLE LOGS TO CREATE A LETTER, MASK IT WITH A "_" IF YOU GUESS WRONG
//AND DISPLAY THE UNDERLYING LETTER IF YOU GUESS RIGHT. CAN ALSO FLIP
//THE GUESS STATE FROM FALSE TO TRUE BY GUESSING THE LETTER.

/*var A = new Letter("b");
console.log("-------------------");
console.log("Underlying Character: " + A.character);
console.log("Guess State: " + A.guessState);
console.log("-------------------");
A.characterCheck("b");
console.log("Guess State: " + A.guessState);
A.hasItBeenGuessed();*/
