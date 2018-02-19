var Letter = function(character) {
    this.character = character,
    this.guessState = false,
    this.characterCheck = function(letterGuessed) {
        if (letterGuessed === this.character) {
            this.guessState = true;
        }
    }
    this.ifGuessed = function() {
        if (this.guessState === true) {
            return this.character;
        } else {
            return "_";
        }
    } 
}

module.exports = Letter

/*var A = new Letter("a");
console.log("-------------------");
console.log("Underlying Character: " + A.character);
console.log("Guess State: " + A.guessState);
console.log("-------------------");
A.characterCheck("a");
console.log("Guess State: " + A.guessState);
A.ifGuessed();*/