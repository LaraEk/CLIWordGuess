// * **wordguess.js**: The file containing the logic for the course of the game

var word = require("./words.js");
var inquirer = require("inquirer");

wordlist = ["AMBORELLA", "NYMPHAEALES", "ILLICIALES", "TRIMENIACEAE", "EUDICOTS", "MONOCOTS", "MAGNOLIIDS", "PALEODICOTS", "CHLORANTHACEAE", "CERATOPHYLLALES"];
//wordlist = ["TEST WORD"];

var pickaword = 0;
var chosenword = "";
var gameword = "";
var counter = 0;

function startGame() {
    pickaword = Math.floor(Math.random()*wordlist.length);
    chosenword = wordlist[pickaword];
    gameword = new word(chosenword);
    gameword.makeword();
    // if (pickaword > -1) {
    //     wordlist.splice(pickaword, 1);
    // }
    console.log("the category is Angiosperms.  10 chances");
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
    // } else if (gameword.showword() == chosenword) {
    //     rightguess();
    } else {
        console.log("no more guess");
        console.log("the correct word was" + chosenword);
        chosenword = "";
        gameword = "";
        pickaword = 0;
        counter = 0;
        startGame();
    }
}

function checkanswer(data) {
   if((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        // note: /^[a-zA-Z]+$/ : https://stackoverflow.com/questions/2790813/regular-expression-a-za-z-or-a-za-z
        var checkable = data.letter.toUpperCase();
        var temp = gameword.showword();
        gameword.checkGuess(checkable);
        // if (chosenword.replace(/_/g," ") == (gameword.showword()).replace(/_/g," ")) {
        //      rightguess();
        // } else {
        //     console.log("wrong lett");
        //     counter++;
        //     console.log((10 - counter) + "guesses left");
        //     promptuser();
        // }

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
   // console.log(chosenword);
   // console.log(gameword.showword());
//    if (chosenword.replace(/_/g," ") == (gameword.showword()).replace(/_/g," ")) {
        // note: .replace(/_/g," ") replaces underscores with spaces
    if (chosenword.trim().toUpperCase() == gameword.showword().trim().toUpperCase()) {
        console.log("test");
        console.log(gameword.showword());
        console.log("winrar");
        chosenword = "";
        gameword = "";
        pickaword = 0;
        counter = 0;
        startGame();
    } else {
        promptuser();
     }
}

startGame();