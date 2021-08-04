import {
    biconditionalLawsLayout,
    implicationLawsLayout,
} from '../../all-layouts/truthTables';
import { $ } from '../for-dom-calls';

const showQuestion = (text, mode) => {
    $('#question').textContent = mode == 'hard' ? `(A): ${text}` : text;
};

// add descriptive text to explanation div
const prepareExplanation = (text) => {
    $('#explanation-text').innerHTML = text;
};

// make ready twister statement
const prepareQuestionStatementTwister = (text, mode) => {
    $('#twister').textContent = mode == 'hard' ? `(B): ${text}` : text;
};

// show twister statement rules is used
const whichLawIsUsed = (text) => {
    $('#law').textContent = `Use ${text} law. Click (?) for more info.`;
};

// show laws truth table
const showLawTruthTable = (laws) => {
    const table = $('#truth-table');
    table.innerHTML = '';

    if (laws === 'implication') {
        table.append(implicationLawsLayout());
    } else {
        table.append(biconditionalLawsLayout());
    }
};

const hideElement = (selector) => {
    $(selector).style.display = 'none';
};

const showElement = (selector) => {
    $(selector).style.display = 'block';
};

export {
    hideElement,
    showElement,
    showQuestion,
    prepareExplanation,
    prepareQuestionStatementTwister,
    whichLawIsUsed,
    showLawTruthTable,
};
