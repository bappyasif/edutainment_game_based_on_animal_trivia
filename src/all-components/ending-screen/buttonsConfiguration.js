import { clearScreen } from "../../all-utils/for-dom-calls";
import { showMenu } from "../main-menu/showLayout";
import { transitionToQuestionRound } from "../question-round/beforeGameplay";
import { commenceCategorySelection } from "../starting-screen/categorySelection";
import { addStartingScreenToDOM } from "../starting-screen/showLayout";

const handleBackToMenu = () => {
    showMenu();
};

// playing another round upon user selected animal category
const handlePlayAgainPrev = () => {
    // this is also in the mainMenu so maybe we could make this a fn
    clearScreen();
    addStartingScreenToDOM();
    commenceCategorySelection();
};

// playing another round for same animal category chosen by user as before
let handlePlayAgain = (category) => {
    clearScreen();
    transitionToQuestionRound(category);

}

export {handleBackToMenu, handlePlayAgain}