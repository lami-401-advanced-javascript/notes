'use strict';




/// constructor function that links to my prototype with object references ///
class Input{
    constructor(action, payload){
    this.action = this.isValid(action) ? action : null;
    this.payload = payload;
}


/// this prototype adds information to a payload array and stores it ///
isValid(action){
    if(action === "--add" || action === "-a"){
        return true;
    }else{
        return false;
    }
};
}




/// export your constructor for notes and index to use ///
module.exports =  Input;
