import { clearScreen } from '../../all-utils/for-dom-calls';
import { commencePlaying } from './gamePlay';
import showLayout from './showLayout';

export const transitionToQuestionRound = (category, mode) => {
    // clearing out starting screen
    clearScreen();

    // showing question round screen
    showLayout(mode);

    // this will start actual game play
    commencePlaying(category, mode);
};
