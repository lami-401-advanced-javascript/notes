'use strict'

const mongoose = require("mongoose");
const myNotes = require("../Models/model.js");


class Note {

    constructor(args){
        this.action = args.action;
        this.payload = args.payload;
        this.category = args.category;
    }

     execute(action, payload) {
        if(action === "-a" || action === "--add"){
            return this.add(payload);
        }
        if(action === "--list"){
            return this.list(this.category);
        }
        if(action === "--delete"){
            return this.delete(this.id);
        }
    }

     add() {
        const note = new myNotes({
            text: this.payload,
            category: this.category,
        })

        return note.save();
        
    }

     delete(id){
        return myNotes.findByIdAndDelete(id);
        
    }
    
    list(category){
        if(category){
            return myNotes.find({category: `${category}`});
        }else{
            return myNotes.find({});
        }
    }

        return;
    }



module.exports = Note;
