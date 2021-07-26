import { clearScreen } from "../../all-utils/for-dom-calls";
import { commencePlaying } from "./gamePlay";
import { showLayout } from "./showLayout";

export let transitionToQuestionRound = (category) => {
    // clearing out starting screen
    clearScreen();

    // showing question round screen
    showLayout();

    // this will start actual game play
    commencePlaying(category);
};