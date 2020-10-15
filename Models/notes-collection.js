"use strict";

const schema = require("./notes-schema");

class Notes {
    constructor(model){
        this.model = model;
    }

    add(payload, category) {
        const note = new this.model({
            text: payload,
            category: category,
        })

        return note.save();
        
    }

     delete(id){
        return this.model.findByIdAndDelete(id);
        
    }
    
    list(category){
        if(category){
            return this.model.find({category: `${category}`});
        }else{
            return this.model.find({});
        }
    }
}

module.exports = Notes;