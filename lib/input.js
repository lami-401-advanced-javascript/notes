'use strict';

const minimist = require("minimist");

class Input {

    constructor(){

        let args = minimist(process.argv.slice(2))
        this.command = this.parseInput(args);
    }

    parseInput(args) {
        let allArguments = {
            a: "--a",
            add: "--add",
            d: "--delete",
            l: "--l",
            list: "--list"
        }

        let newArgument = Object.keys(args).filter(arg => allArguments[arg])[0];

        return {
            action: allArguments[newArgument],
            payload: typeof args[newArgument] === "string" ? args[newArgument] : undefined,
            category: args.category || args.c,
        }
    }
    }


    module.exports = Input;