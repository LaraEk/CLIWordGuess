// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character 
//                  or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
// 					That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


// 3. `Letter.js` *should not* `require` any other files.
// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)


// ----------- this one used to be STUDENT.JS ---------- //

// constructor function for creating student objects
// var Student = function(name, favoriteSub, gpa) {
// 	this.name = name;
// 	this.favoriteSub = favoriteSub;
// 	this.gpa = gpa;
// };

// exporting our Student constructor
// module.exports = Student;

//var inquirer = require("inquirer");

var letter = function(theletter) {
	this.theletter = theletter;
//   * string -- store the underlying character
	this.guessed = false;
//   * boolean -- stores whether letter has been guessed yet
	this.showletter = function() {
		if (this.guessed === true) {
			return this.theletter
		} else {
			return "_"
		}
	}
//   * function = returns the underlying character if letter has been guessed, or _ if letter has not been guessed
	this.checkguessed = function(guess) {
		if (guess === this.theletter) {
			this.guessed = true;
		}
	}
//   * function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
};

// var letter = new letter("a");
// letter.showletter();
// console.log(letter);

module.exports = letters;
