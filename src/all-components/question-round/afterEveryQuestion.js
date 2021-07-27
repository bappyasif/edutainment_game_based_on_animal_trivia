import { $ } from "../../all-utils/for-dom-calls";
import { showModal } from "../../all-utils/for-game-play";
import { showEndingScreen } from "../ending-screen/showLayout";
import { makingQuestionPhaseReady, questionData } from "./gamePlay";

// how many number of questions will be in a round, it's 5 but for development pjurpose using 2
let bundle = 2;

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
    showModal();

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
}

// triggering continue from modal would transition to ending screen
let continueToNextQuestion = (category) => {
    makingQuestionPhaseReady(category);
    reviveClickEvents();
}

// playing entire round of 'bundle' number of questions to decide entire game score for that round for any player
let playingFullBundleQuestions = (category, count) => {
    $('.explain-question').addEventListener('click', () => {
        if(count < bundle) {
            continueToNextQuestion(category);
        } else {
            showEndingScreen();
        }
        count++;
    });
}

export {bundle, playingFullBundleQuestions, handleResponse}