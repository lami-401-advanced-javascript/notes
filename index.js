'use strict';

/// require input and notes files and utilize their functions ///
require("dotenv").config();
const Input = require("./lib/input.js");
const mongoose = require("mongoose");
const Note = require("./lib/notes.js");

const input = new Input(process.argv)
console.log(input);

if(input.action){
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
  console.log("connected");
  const notes = new Note(input);
  notes.execute(process.argv[2], process.argv[3]).then(result => console.log(result))

});
}else{
  console.log(`${process.argv[2]} is not a command`)
}
  




