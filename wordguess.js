// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses


// // ----------- this one used to be MAIN.JS ---------- //

// // requiring our Classroom module exported from classroom.js
// var Classroom = require("./Classroom.js");
// // -------- var words = require("./words.js");

// // creating and storing a new classroom object
// var firstClass = new Classroom("Ahmed", 3187);

// // calling the addStudent method on our firstClass object
// firstClass.addStudent("Jacob", "Coding", 3.87);
// firstClass.addStudent("Not Jacob", "Coding", 1000.87);


// console.log(firstClass);


var word = require("./words.js");
var inquirer = require("inquirer");

wordlist = ["TEST WORD"];

var select = 0;
var chosenword = "";
var gameword = "";
var counter = 0;

function startGame() {
    select = Math.floor(Math.random()*wordlist.length);
    chosenword = wordlist[select];
    gameword = new word(chosenword);
    gameword.makeword();
    // if (select > -1) {
    //     wordlist.splice(select, 1);
    // }
    console.log("10 chances");
    promptuser();
}

function promptuser() {
    if (counter < 10) {
        console.log(gameword.showword());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "type any letter, then press Enter"
            }
        ]).then(function(data) {
            checkanswer(data);
        });
    } else {
        console.log("no more guess");
//        console.log(chosenword.rainbow);
        chosenword = "";
        gameword = "";
        select = 0;
        counter = 0;
        startGame();
    }
}

function checkanswer(data) {
    if((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var checkable = data.letter.toUpperCase();
        var temp = gameword.showword();
        gameword.checkGuess(checkable);
        if (temp === gameword.showword()) {
            console.log("wrong lett");
            counter++;
            console.log((10 - counter) + "guesses left");
            promptuser();
        } else {
            rightguess();
        }
    } else {
        console.log("one letter at a time");
        promptuser();
    }
}

function rightguess() {
    console.log("right!!!!!");
    if (chosenword.replace(/_/g,"") == (gameword.showword()).replace(/_/g,"")) {
//        console.log(gameword.showword().america);
        console.log(gameword.showword());
        console.log("winrar");
        chosenword = "";
        gameword = "";
        select = 0;
        counter = 0;
        startGame();
    } else {
        promptuser();
    }
}

startGame();