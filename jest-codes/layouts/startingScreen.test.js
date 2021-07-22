/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const creatingStartingScreenLayout = require("../../src/all-layouts/creatingStartingScreenLayout");

test('checking if starting screen is generated', () => {
    // expect(creatingStartingScreenLayout()).toBe(null)
    expect(creatingStartingScreenLayout()).not.toBe(null)
});