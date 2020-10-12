'use strict'

const note = require("./input")
var argv = require('minimist');

note.adding.add = function () {
    let diary = [];
    let count = 0;
    note.payload.forEach(item => {
        
        diary.push(item)
    });

    for(let i = 0; i < diary.length; i++){
        diary.forEach(item => {
            count++;
        });

    console.log(`${count}. ${diary}`)
    }
    
}

module.exports = note;
