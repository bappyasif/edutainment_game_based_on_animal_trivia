import { $ } from '../for-dom-calls';

// initially hiding modal view from DOM
const hideModal = () => {
    $('.backdrop').style.display = 'none';
};

// make visible modal div
const showModal = () => {
    $('.backdrop').style.display = 'block';
};

const showQuestion = (text) => {
    $('#question').textContent = text;
};

// add descriptive text to explanation div
const prepareExplanation = (text) => {
    $('#explanation-text').textContent = text;
};

export { hideModal, showModal, showQuestion, prepareExplanation };
