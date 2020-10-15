'use strict'

// const mongoose = require("mongoose");
const myNotes = require("../Models/model.js");
const Collections = require("../Models/notes-collection");

class Note {

    constructor(args){
        this.action = args.action;
        this.payload = args.payload;
        this.category = args.category;
        this.id = args.id;
        this.Collections = new Collections(myNotes);
    }

     execute() {
        if(this.action === "-a" || this.action === "--add"){
          return this.Collections.add(this.payload);
        }
        if(this.action === "--list"){
            return this.Collections.list(this.category);
        }
        if(this.action === "--delete"){
            return this.Collections.delete(this.id);
        }
    }
    }



module.exports = Note;
