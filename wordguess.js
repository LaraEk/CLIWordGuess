// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses


// ----------- this one used to be MAIN.JS ---------- //

// requiring our Classroom module exported from classroom.js
var Classroom = require("./Classroom.js");
// -------- var words = require("./words.js");

// creating and storing a new classroom object
var firstClass = new Classroom("Ahmed", 3187);

// calling the addStudent method on our firstClass object
firstClass.addStudent("Jacob", "Coding", 3.87);
firstClass.addStudent("Not Jacob", "Coding", 1000.87);


console.log(firstClass);
