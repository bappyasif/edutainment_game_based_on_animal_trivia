import { $ } from "../../all-utils/for-dom-calls";
import { hideModal, showExplanation, showQuestion } from "../../all-utils/for-game-play";
import { getQuestions } from "../question-generator/randomizer";
import { handleResponse, playingFullBundleQuestions } from "./afterEveryQuestion";
let count = 1, questionData = {};

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
    playingFullBundleQuestions(category, count);
};

// seperated question functionality so that it has access mobility
let makingQuestionPhaseReady = (category) => {
    // clearing out modal layout from screen
    hideModal();
    
    // making ready next randomly selected question from randomizer
    feedQuestion(category);

    // showing up question text in modal
    showQuestion(questionData.question);
}

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

// listen for which option they choosing from
let listenForUserResponse = () => {
    let answersDiv = $('.answer-options');
    answersDiv.addEventListener('click', handleResponse);
};

export {commencePlaying, questionData, makingQuestionPhaseReady}