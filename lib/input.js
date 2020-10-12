'use strict';

var argv = require('minimist');

const note = {
    add: "add",
    payload: [],
}

note.adding = function () {

    if (!process.argv[3]) {
        return console.error("You need to use -a or -add to -add followed by quotes('with your text')");
    }
    if ("-a" || "-add") {
        this.payload.push(process.argv[3]);
        console.log(note);
    }





}


module.exports = note;
