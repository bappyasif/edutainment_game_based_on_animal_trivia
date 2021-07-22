const { test, expect } = require("@jest/globals");
const { getQuestions } = require("../../src/randomizer");

test('checking randomizer function intricacies', () => {
    expect(getQuestions('mammals').next()).toBe(null);
});