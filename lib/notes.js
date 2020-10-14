'use strict'

/// noteTaker variable is to require information from input.js///
class Notes{
    constructor(action, payload){
    this.id = Math.floor(Math.random() * 1000);
    this.action = action;
    this.payload = payload;
}

/// this prototype holds the id and the text that was inputted into to the noteTaker function ///
execute(action, payload) {

if(action === "-add" || action === "-a") {
        this.add(payload)
}
};

add(payload){
    console.log(`adding note: ${this.id} - ${payload}`);
};
}

/// export so index can use the function ///
module.exports = Notes;
