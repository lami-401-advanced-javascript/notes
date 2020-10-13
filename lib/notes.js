'use strict'

const noteTaker = require("./input");

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
    console.log("SAVED TO NOTES: \n");
    console.log(`${id}. ${diary}`);
    }
    return '';
   
}

module.exports = noteTaker;
