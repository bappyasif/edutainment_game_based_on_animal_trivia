/**
 * @jest-environment jsdom
*/

const creatingStartingLayout = require("../../all-layouts/creatingStartingScreen")

test.skip('checking if layout is being created', () => {
    expect(creatingStartingLayout()).not.toBe(null)
    // expect(creatingStartingLayout()).toBe(null)
});