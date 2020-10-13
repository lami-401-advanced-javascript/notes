'use strict';


///use miminist to read information from the console///
var argv = require('minimist');


/// constructor function that links to my prototype with object references ///
function noteTaker(){
    this.action = this.adding;

}

/// this prototype adds information to a payload array and stores it ///
noteTaker.prototype.adding = function () {
    this.action = "add";
    this.payload = [];

    if (!process.argv[3]) {
        return console.error("You need to use -a or -add to -add followed by quotes('with your text')");
    }
    if ("-a" || "-add") {
        this.payload.push(process.argv[3]);


         console.log(`Adding Note: ${this.payload} \n`);
    }


     console.log({action : this.action , payload : this.payload} , "\n");
    return "\n";

}


/// export your constructor for notes and index to use ///
module.exports =  noteTaker;
