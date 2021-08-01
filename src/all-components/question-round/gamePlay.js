import { $ } from '../../all-utils/for-dom-calls';
import {
    hideModal,
    prepareExplanation,
    prepareQuestionStatementTwister,
    showLawTruthTable,
    showQuestion,
    whichLawIsUsed,
} from '../../all-utils/for-game-play';
import { getQuestions } from '../question-generator/randomizer';
import {
    handleResponse,
    playingFullBundleQuestions,
} from './afterEveryQuestion';

let count = 1;
let questionData = {};
let roundQuestions = [];

// fires up process for starting playing question round
const commencePlaying = (category, mode) => {
    // resetting counter to 1 each time, so that it starts from initial count for each round
    count = 1;

    // generating bundle of question
    generateBundleOfQuestions(category);

    // separated questions fedding functionality so that it can be used for mutiple times
    // to complete a bundle of question to sum up to a round
    makingQuestionPhaseReady(mode);

    // listen for user response on each question
    listenForUserResponse(mode);

    // playing a full round of whatever 'bundle' value is defined at begining of this file
    playingFullBundleQuestions(count, mode);
};

// seperated question functionality so that it has access mobility
const makingQuestionPhaseReady = (mode) => {
    // clearing out modal layout from screen
    hideModal();

    // making ready next randomly selected question from randomizer
    // feedQuestion(category);
    feedQuestion();

    // showing up question text in modal
    // mode == 'hard' ? showQuestion(questionData.twister) : showQuestion(questionData.question)
    showQuestion(questionData.question);

    // showing question twister statement
    if (mode === 'hard') {
        prepareQuestionStatementTwister(questionData.twister);
        whichLawIsUsed(questionData.lawUsed);
        showLawTruthTable(questionData.lawUsed);
    }

    // showing up modal and explanation in it on screen
    prepareExplanation(questionData.explanation);
    // console.log(questionData.explanation)
};

// generating a bundle of questions from json data set using randomizer module and assigning it to a variable for future uses
let generateBundleOfQuestions = (category) => {
    // commencing getQuestions with a user selected category name as a parameter to initiate getQuestions
    let questions = getQuestions(category);

    // generating 5 randomly chosen unique question from json data set
    let questionsBundle = new Array(5).fill().map(questions.next);

    // assigning roundQuestion with bundle of questions for to use throughout this round in turns
    roundQuestions = questionsBundle;
};

// bringing in a single question each time from roundQuestion to feed into DOM for further uses
let feedQuestion = () => {
    // clearing previously held all question data
    questionData = {};

    // getting last question in from bucket
    const readyQuestion = roundQuestions.pop();

    // providing questionData current question object to extract data from to use in DOM through other functions
    questionData = readyQuestion;
};

// listen for which option they choosing from
const listenForUserResponse = (mode) => {
    $('#choices').addEventListener('click', (evt) => handleResponse(evt, mode));
};

export { commencePlaying, questionData, makingQuestionPhaseReady };
