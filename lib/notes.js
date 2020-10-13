'use strict'

/// noteTaker variable is to require information from input.js///
const noteTaker = require("./input");


/// this prototype holds the id and the text that was inputted into to the noteTaker function ///
noteTaker.prototype.execute = function () {
    let diary = [];
    let count = 0;
    let id = "ID ";
    this.payload.forEach(item => {
        
        diary.push(item)
    });

    for(let i = 0; i < diary.length; i++){
        diary.forEach(item => {
           id += 1 + count++;
        });
    console.log(`${id}. ${diary}`);
    }
    return '';
   
}

/// export so index can use the function ///
module.exports = noteTaker;
