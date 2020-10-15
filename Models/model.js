"use strict";

const mongoose = require("mongoose");
const NoteSchema = require("./notes-schema.js")

module.exports = mongoose.model("Note", NoteSchema);