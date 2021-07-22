/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const creatingDifficultyLevelLayout = require("../../src/all-layouts/creatingDifficultyLevelLayout");

test('checking if difficulty level layout is generated', () => {
    // expect(creatingDifficultyLevelLayout()).toBe(null);
    expect(creatingDifficultyLevelLayout()).not.toBe(null);
})