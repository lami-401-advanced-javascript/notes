'use strict';

/// require input and notes files and utilize their functions ///
const Input = require("./lib/input.js");
const Notes = require("./lib/notes.js");


/// show'em what you're made of///
/// call the methods and write something down ///

const input = new Input(process.argv[2], process.argv[3]);

if(input.action){
  const notes = new Notes(process.argv[2], process.argv[3]);
  notes.execute(process.argv[2], process.argv[3]);
}
else{
  console.log(`${process.argv[2]} is not a command`);
}