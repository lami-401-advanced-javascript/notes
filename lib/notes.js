'use strict'


const myNotes = require("../model/notes-collection.js");

const note = new myNotes();

class Note {

    constructor(){
    }

     execute(option) {
        switch (option.action) {
            case "add" :
                return this.add(option.payload, option.category)

            case "list" :
                return this.get(option.payload)

            case "delete" :
                return this.delete(option.payload)
            default:
                return Promise.resolve();
        }
    }

     add(text, category) {
        const newNote = ({
            text: text,
            category: category,
        })

        const saveNote =  note.create(newNote);
        return saveNote;
    }

     delete(id){
         note.delete(id);
        return console.log("Deleted Note ID:", id);
    }

     get(category) {
        console.log("consol log 1:", category)
        let searchDB = category ? {category} : {};
        const findNote =  note.get(searchDB);
        console.log("console 2:", searchDB.id)

        findNote.foreach (note => {
            console.log("console 3:", searchDB.category)
            console.log(note.text);
            console.log(" ");
            console.log(`Category: ${note.category}\t ID: ${note.id}`);
        })
        return;
    }

}

module.exports = Note;
