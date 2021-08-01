import {
    biconditionalLawsLayout,
    implicationLawsLayout,
} from '../../all-layouts/truthTables';
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

// make ready twister statement
const prepareQuestionStatementTwister = (text) => {
    $('#twister').textContent = text;
};

// show twister statement rules is used
const whichLawIsUsed = (text) => {
    $('.law-used').textContent = text;
};

// show laws truth table
const showLawTruthTable = (laws) => {
    // let implicationLaws = new Image();
    // implicationLaws.src = './images/implicationLaws.png';

    // let biconditionalLaws = new Image();
    // biconditionalLaws.src = './images/biconditionalLaws.png';

    const implicationLaws = implicationLawsLayout();

    const biconditionalLaws = biconditionalLawsLayout();

    console.log(implicationLaws, biconditionalLaws);

    $('#truth-table').innerHTML = '';
    if (laws === 'implication') {
        $('#truth-table').append(implicationLaws);
    } else {
        $('#truth-table').append(biconditionalLaws);
    }
};

export {
    hideModal,
    showModal,
    showQuestion,
    prepareExplanation,
    prepareQuestionStatementTwister,
    whichLawIsUsed,
    showLawTruthTable,
};
