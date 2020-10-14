const Notes = require('../lib/notes.js');
const notes = new Notes();

jest.spyOn(notes, 'add');

// test for execute ()
describe ('Notes module', () => {
    it('execute() does nothing when the options are invalid', () => {
        let note2 = new Notes();

        note2.execute();
            expect(console.log).not.toHaveBeenCalled
    })
    
//test for add ()
    it('Note.prototype.add() can add a note', () => {
        let notey = new Notes();
        notey.execute({ action: 'add' , payload: 'payload'})

            expect(notey.add).toHaveBeenCalled

        
    })
})





// const Notes = require("../lib/notes");
// jest.spyOn(global.console, "log");




//     test("validation check", () => {
//         const notes2 = new Notes("--bad", "nah");
//         notes2.execute(notes2.action, notes2.payload);
        
//         expect(console.log).not.toHaveBeenCalled()
//         const notes = new Notes("--add", "hey");
//         notes.execute(notes.action, notes.payload);

//         expect(console.log).toHaveBeenCalled(`adding note: ${notes.payload}`);

//     });

