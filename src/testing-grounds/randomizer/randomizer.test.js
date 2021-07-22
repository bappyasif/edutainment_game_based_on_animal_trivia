let getQuestions = require("../../randomizer");

test.only('checking randomizer functionality workings', () => {
    expect(getQuestions("mammals").next()).not.toBe(null);
    // expect(getQuestions("mammals").next()).toBe(null);
});

test('checking randomizer undefined functionality', () => {
    expect(getQuestions("").next().toBe(null));
})