/**
 * @jest-environment jsdom
 */

const creatingDifficultyLevelScreen = require("../../all-layouts/creatingDifficultyLevelScreen");

test.skip('checking difficulty level screen', () => {
    expect(creatingDifficultyLevelScreen()).toBe(null);
});