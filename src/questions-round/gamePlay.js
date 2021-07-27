import { showLayout } from '.';
import { getQuestions } from '../randomizer';
import { showEndingScreen } from '../startup-components/endingScreen';
import { $ } from '../startup-components/userInteraction';
let questionData = {};
let modalDiv,
    count,
    bundle = 2;

// initially hiding modal view from DOM
let hidingModal = () => {
    modalDiv = $('.explain-why');
    modalDiv.style.display = 'none';
};

// fires up process for starting playing question round
let commencePlaying = (category) => {
    // resetting counter to 1 each time, so that it starts from initial count for each round
    count = 1;

    // separated questions fedding functionality so that it can be used for mutiple times
    // to complete a bundle of question to sum up to a round
    makingQuestionPhaseReady(category);

    // listen for user response on each question
    listenForUserResponse();

    // showing up modal and explanation in it on screen
    showExplanation(questionData.explanation);

    // playing a full round of whatever 'bundle' vaue is defined at begining of this file
    playingFullBundleQuestions(category);
};

// seperated question functionality so that it has access mobility
let makingQuestionPhaseReady = (category) => {
    // clearing out modal layout from screen
    hidingModal();

    // making ready next randomly selected question from randomizer
    feedQuestion(category);

    // showing up question text in modal
    showQuestion(questionData.question);
};

// feeding question data into a an object after recieving a question
let feedQuestion = (category) => {
    // currently clearing out previous data as im considering we will feed question one by one,
    // we need to discuss how we would deal with it and refactor it accordingly
    questionData = {};

    // getting a randomized question from randomizer module
    let readyQuestion = getQuestions(category).next();

    // keeping question data temporarily for access
    questionData = readyQuestion;
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
    $('.answer-options').removeEventListener('click', handleResponse);
};

// getting clicking events back up on for next question to use those buttons to choose their response from for checking if they answered it correctly or not
let reviveClickEvents = () => {
    $('.answer-options').addEventListener('click', handleResponse);
};

// triggering continue from modal would transition to ending screen
let continueToNextQuestion = (category) => {
    makingQuestionPhaseReady(category);
    reviveClickEvents();
};

// playing entire round of 'bundle' number of questions to decide entire game score for that round for any player
let playingFullBundleQuestions = (category) => {
    $('.explain-question').addEventListener('click', () => {
        if (count < bundle) {
            continueToNextQuestion(category);
        } else {
            showEndingScreen();
        }
        count++;
    });
};

export { commencePlaying };
