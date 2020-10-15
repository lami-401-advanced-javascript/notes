'use strict';

/// require input and notes files and utilize their functions ///
const Input = require("./lib/input.js");
const Notes = require("./lib/notes.js");



//files we will be using 
const mongoose = require('mongoose');
// const NotesDB = require('./models/notes-schema.js');


///Connect to mongoose
const MONGOOSE_URI = 'mongodb://localhost:27017';
mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
  const input = new Input();
  const notes = new Notes();
  
  if (new Input()) {
      notes.execute(input.command)
      .then(mongoose.disconnect)
      .catch(error => console.error(error))
  } else {
      console.log("Ugh...")
  }

})



