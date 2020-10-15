'use strict'

const schema = require("./notes-schema.js");

class Notes {
    constructor(){

    }

    get(_category){
        return _category ? schema.find(_category): schema.find({});
    }

    create(record) {
        let newRecord = new schema(record);
        return newRecord.save();
    }

    delete(_id){
        return schema.findByIdAndDelete(_id);
    }
}

module.exports = Notes;