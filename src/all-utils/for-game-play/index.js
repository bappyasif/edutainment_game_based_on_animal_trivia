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
let prepareQuestionStatementTwister = (text) => {
    $('#twister').innerText = text;
    $('#twister').classList.add('question__text');
}

// show twister statement rules is used
let whichLawIsUsed = (text) => {
    $('.law-used').textContent = text;
}

// show laws truth table
let showLawTruthTable = laws => {

    let implicationLaws = new Image();
    implicationLaws.src = './images/implicationLaws.png';

    let biconditionalLaws = new Image();
    biconditionalLaws.src = './images/biconditionalLaws.png';
    
    $('#truth-table').innerHTML = '';
    laws == 'implication' ? $('#truth-table').append(implicationLaws) : $('#truth-table').append(biconditionalLaws)
}

export { hideModal, showModal, showQuestion, prepareExplanation, prepareQuestionStatementTwister, whichLawIsUsed, showLawTruthTable };
