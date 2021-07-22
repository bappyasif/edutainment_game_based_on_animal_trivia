/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const creatingQuestionRoundLayout = require("../../src/all-layouts/creatingQuestionRoundLayout");

test('checking if question round screen is generated', () => {
    // expect(creatingQuestionRoundLayout()).toBe(null);
    expect(creatingQuestionRoundLayout()).not.toBe(null);
});