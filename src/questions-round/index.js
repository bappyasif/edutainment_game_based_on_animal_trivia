import { creatingQuestionRoundLayout } from '../all-layouts/creatingQuestionRoundLayout';
import { commencePlaying } from './gamePlay';
import { showEndingScreen } from '../startup-components/endingScreen';

// clearing starting screen layout from DOM
let clearStartingScreenLayout = () => {
    document.body.textContent = '';
};

// makes necessary adjustments to make visibe question round layout on screen
export let transitioningToQuestionRound = (category) => {
    clearStartingScreenLayout();
    showLayout();
    // this will start actual game play
    commencePlaying(category);

    // // just to show the ending screen for now
    // document
    //     .querySelector('.explain-question')
    //     .addEventListener('click', () => {
    //         showEndingScreen();
    //     });
};

// showing question round layout on DOM
let showLayout = () => {
    let questionRound = creatingQuestionRoundLayout();
    document.body.append(questionRound);
};
