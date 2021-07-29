import Star from '../../all-layouts/Star';
import { $ } from '../../all-utils/for-dom-calls';
import { showModal } from '../../all-utils/for-game-play';
import { showEndingScreen } from '../ending-screen/showLayout';
import { makingQuestionPhaseReady, questionData } from './gamePlay';
import fillStars from './fillStars';
import countScore from './afterRound';

// how many number of questions will be in a round, it's 5 but for development pjurpose using 2
const bundle = 5;

// will check for which answer they chose and decide whether it's a correctr response or not
const handleResponse = (e) => {
    // mapping responses from button classes to make assesment against questionData.answer value
    const selectedAnswer = e.target.dataset.answer;
    // checking either true==true or false==false, from button class and questionData.answer
    const isCorrectAnswer = selectedAnswer === `${questionData.answer}`;

    if (isCorrectAnswer) {
        fillStars(true);
        alert('yeppi');
    } else {
        fillStars(false);
        alert('oopss');
    }

    // show result in the modal
    $('#result').textContent = isCorrectAnswer ? 'Correct!' : 'Wrong!';

    // regardless showing up modal, to provide explanation for why
    showModal();

    // removing click event listener
    removeClickEvents();
};

// removing clicking events from answersDiv
const removeClickEvents = () => {
    $('#choices').removeEventListener('click', handleResponse);
};

// getting clicking events back up on for next question to use those buttons to choose their response from for checking if they answered it correctly or not
const reviveClickEvents = () => {
    $('#choices').addEventListener('click', handleResponse);
};

// triggering continue from modal would transition to ending screen
const continueToNextQuestion = () => {
    makingQuestionPhaseReady();
    reviveClickEvents();
};

// playing entire round of 'bundle' number of questions to decide entire game score for that round for any player
const playingFullBundleQuestions = (count) => {
    $('#next-question').addEventListener('click', () => {
        if (count < bundle) {
            continueToNextQuestion();
        } else {
            // let [starsCounted, result] = [...announceResult()];
            showEndingScreen(countScore());

            // showEndingScreen(starsCounted);
        }
        count++;
    });
};

export { bundle, playingFullBundleQuestions, handleResponse };
