/**
 * @jest-environment jsdom
 */

const creatingQuestionRoundScreen = require("../../all-layouts/creatingQuestionRoundScreen")

test.skip('checking if question round screen layout is generated', () => {
    // expect(creatingQuestionRoundScreen()).toBe(null)
    expect(creatingQuestionRoundScreen()).not.toBe(null)
})