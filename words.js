// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


// 4. `Word.js` *should only* require `Letter.js`
// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`


// ----------- this one used to be CLASSROOM.JS ---------- //

// requiring our Student module exported from student.js
var Student = require("./student.js");
// -------- var word = require("./letters.js");

// constructor function for creating classroom objects
var Classroom = function(profName, roomNum) {
	// this.students will hold all of our student objects
	this.students = [];
	this.profName = profName;
	this.roomNum = roomNum;
	// a method that creates a student using our Student constructor.
	// It then pushes the new student object to this.students and updates this.numStudents
	this.addStudent = function(name, favoriteSub, gpa) {
		this.students.push(new Student(name, favoriteSub, gpa));
	};
	// this method will tell you how many students are in the class
	this.studentCount = function() {
		return this.students.length;
	};
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Classroom;
// -------- 
module.exports = words;
