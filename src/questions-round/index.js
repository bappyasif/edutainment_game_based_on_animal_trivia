import { createQuestionRoundLayout} from '../all-layouts/questionRound';
import { commencePlaying } from './gamePlay';
import { showEndingScreen } from '../startup-components/endingScreen';
import { $ } from '../startup-components/userInteraction';
let count = 1;

// clearing starting screen layout from DOM
let clearStartingScreenLayout = () => {
    document.body.textContent = '';
};

// makes necessary adjustments to make visibe question round layout on screen
let transitionToQuestionRound = (category) => {
    clearStartingScreenLayout();
    showLayout();
    console.log(category);
    // $('.explain-why').style.display = 'none';
    // this will start actual game play
    commencePlaying(category);
    // playFiveQuestionsBundle(category)

    // // just to show the ending screen for now
    // document
    //     .querySelector('.explain-question')
    //     .addEventListener('click', () => {
    //         showEndingScreen();
    //     });
};

let playFiveQuestionsBundle = (category) => {
    // $('.explain-why').style.display = 'none';

    $('.explain-question').addEventListener('click', () => {

        if(count < 5) {
            $('.explain-why').style.display = 'none';
            commencePlaying(category);
        } else {
            // count = 1;
            showEndingScreen();
            // break;
        }
        console.log(count)
        count++;
    })
}

// showing question round layout on DOM
let showLayout = () => {
    clearStartingScreenLayout();
    let questionRound = createQuestionRoundLayout();
    document.body.append(questionRound);
};

export {transitionToQuestionRound, showLayout}