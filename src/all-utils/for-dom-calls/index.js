const $ = (selector) => document.querySelector(selector);

const $all = (selector) => document.querySelectorAll(selector);

const clearScreen = () => {
    document.body.innerHTML = '';
};

export { $, $all, clearScreen };
