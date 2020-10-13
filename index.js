'use strict';

/// require input and notes files and utilize their functions ///
const Input = require("./lib/input.js");
const Notes = require("./lib/notes.js");


/// show'em what you're made of///
/// call the methods and write something down ///

const verify = new Input(process.argv[2], process.argv[3]);
const results = verify.isValid(process.argv[2], process.argv[3]);

if(results !== "That is incorrect"){
  const console = new Notes(process.argv[2], process.argv[3]);
  console.execute(process.argv[2], process.argv[3]);
}
else{
  console.log(`${verify.action} is not a command`);
}