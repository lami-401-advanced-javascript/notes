
const {expect} = require("@jest/globals");
const Input = require("../lib/input");
const minimi = require('minimist');

describe("Testing input nonsense", () => {
    it("should give me a new instance ", () => {
    const verify = new Input(minimi[2], minimi[3]);
    const results = verify.isValid(minimi[2], minimi[3]);
    

    expect(results).not.toBe(null);
    expect(results).toBeTruthy();
    expect("").toBeFalsy();

    })
})