'use strict';


///use miminist to read information from the console///
var argv = require('minimist');


/// constructor function that links to my prototype with object references ///
function Input(action, payload){
    this.action = action;
    this.payload = payload;
}

/// this prototype adds information to a payload array and stores it ///
Input.prototype.isValid = function (action, payload){
    if(action === "-add" || action === "-a"){
        return new Input (action, payload);
    }else{
        return null;
    }
}




/// export your constructor for notes and index to use ///
module.exports =  Input;
