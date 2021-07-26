import { $ } from "../for-dom-calls";

// initially hiding modal view from DOM
let hideModal = () => {
    $('.explain-why').style.display = 'none';
};

// make visible modal div
let showModal = () => {
    $('.explain-why').style.display = 'flex';
};

let showQuestion = (text) => {
    let statementDiv = $('.topic .text');
    statementDiv.textContent = text;
};

// add descriptive text to explanation div
let prepareExplanation = (text) => {
    let explanationDiv = $('.explain-why .text');
    explanationDiv.textContent = text;
};

export {hideModal, showModal, showQuestion, prepareExplanation}
