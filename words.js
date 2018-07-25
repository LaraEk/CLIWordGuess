// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.

var letter = require("./letters.js");

function word(newword) {
	this.newword = newword;
	this.letterarray = [];
	this.makeword = function() {
		for (var i = 0; i < newword.length; i++) {
			var lett = new letter(newword[i]);
			this.letterarray.push(lett);
		}
	}
	this.showword = function() {
		var worddisplay = [];
		for (var i = 0; i < this.letterarray.length; i++) {
			worddisplay.push(this.letterarray[i].showletter());
		}
		return worddisplay.join(" ");
	}
	this.checkGuess = function(myguess) {
		for (var i=0; i<this.letterarray.length; i++) {
		this.letterarray[i].checkguessed(myguess);
		}
	}
}

module.exports = word;
