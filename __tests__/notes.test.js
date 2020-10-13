
const {expect} = require("@jest/globals");
const Notes = require("../lib/notes");
const notes = new Notes();
jest.spyOn(notes, "add");


describe("Notes Mod", () => {
    it("should give me a output using spy ", () => {
        notes.execute({})
        .then(() => {
            expect(notes.add()).not.toHaveBeenCalled()
        })
    })
    it("can also add", () => {
        notes.execute({action: action, payload: payload})
        .then( () => {
            expect(notes.add()).not.toHaveBeenCalled()

        })
    })    

})
