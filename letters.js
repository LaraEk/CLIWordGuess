// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character 
//                  or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

var letter = function(theletter) {
	this.theletter = theletter;
	this.guessed = false;
	this.showletter = function() {
		if (this.guessed === true) {
			return this.theletter
		} else {
			return "_"
		}
	}
	this.checkguessed = function(guess) {
		if (guess === this.theletter) {
			this.guessed = true;
		}
	}
};

module.exports = letter;
