let $ = selector => document.querySelector(selector);
let $all = selector => document.querySelectorAll(selector);
let clearScreen = () => document.body.innerHTML = '';

export {$, $all, clearScreen}