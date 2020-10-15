"use strict"

require("@code-fellows/supergoose");


const { expect } = require('@jest/globals');
const Note = require('../lib/notes.js');

require('@code-fellows/supergoose');

// You'll want to add a describe block to give some background as to what is being tested
describe('Testing the http module', () => {
  it('should add a new request upon execution of the fetch method', () => {

    const note = new Note({ action: "--add", payload: "get a job", category: "code-fellows"});

    return note.execute(note.action).then((result) => {
      expect(result.text).toEqual("get a job");
    })
  })
  it('should be able to list previous requests', () => {
    const note = new Note({action: "--list"});

    return note.execute().then(result => {
      expect(result.length).toEqual(1);
    });
  });

  it('should be able to delete previous requests', () => {
    const note = new Note({action: "--delete", id:"5f88c1816375c0baaaa53b57"})

    return note.execute().then(result => {
      expect(result).toBeFalsy();
    });
  });
});

