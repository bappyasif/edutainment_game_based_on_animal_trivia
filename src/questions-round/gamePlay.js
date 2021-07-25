import { getQuestions } from '../randomizer';
import { $ } from '../startup-components/userInteraction';
let questionData = {};
let modalDiv;

// initially hiding modal view from DOM
let hidingModal = () => {
    modalDiv = $('.explain-why');
    modalDiv.style.display = 'none';
};

// fires up process for starting playing question round
let commencePlaying = (category) => {
    hidingModal();
    feedQuestion(category);
    showQuestion(questionData.question);
    listenForUserResponse();
    showExplanation(questionData.explanation);
};

// feeding question data into a an object after recieving a question
let feedQuestion = (category) => {
    // currently clearing out previous data as im considering we will feed question one by one,
    // we need to discuss how we would deal with it and refactor it accordingly
    questionData = {};
    let readyQuestion = getQuestions(category).next();
    // keeping question data temporarily for access
    questionData = readyQuestion;
    // we could alternatively do it from here, but it would not be a pure function
    // showExplanation(readyQuestion.explanation);
};

// show question in questionDiv
let showQuestion = (text) => {
    let statementDiv = $('.topic .text');
    statementDiv.textContent = text;
};

// add descriptive text to explanation div
let showExplanation = (text) => {
    let explanationDiv = $('.explain-why .text');
    explanationDiv.textContent = text;
};

// make visible modal div
let showingModal = () => {
    modalDiv.style.display = 'flex';
};

// listen for which option they choosing from
let listenForUserResponse = () => {
    let answersDiv = $('.answer-options');
    answersDiv.addEventListener('click', handleResponse);
};

// will check for which answer they chose and decide whether it's a correctr response or not
let handleResponse = (evt) => {
    let answeredDiv = evt.target.className;
    if (answeredDiv == 'correct') {
        if (questionData.answer == true) {
            alert('yeppi');
        } else {
            alert('oopss');
        }
    } else if (answeredDiv == 'myth') {
        if (questionData.answer == false) {
            alert('yeppi');
        } else {
            alert('oopss');
        }
    }
    // regardless showing up modal, to provide explanation for why
    showingModal();

    // removing click event listener
    removeClickEvents();
};

// removing clicking events from answersDiv
let removeClickEvents = () => {
    let answersDiv = document.querySelector('.answer-options');
    answersDiv.removeEventListener('click', handleResponse);
};

 export {commencePlaying}