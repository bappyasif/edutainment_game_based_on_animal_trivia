import { clearScreen } from "../../all-utils/for-dom-calls";
import { showMenu } from "../main-menu/showLayout";
import { commenceCategorySelection } from "../starting-screen/categorySelection";
import { addStartingScreenToDOM } from "../starting-screen/showLayout";

const handleBackToMenu = () => {
    showMenu();
};

const handlePlayAgain = () => {
    // this is also in the mainMenu so maybe we could make this a fn
    clearScreen();
    addStartingScreenToDOM();
    commenceCategorySelection();
};

export {handleBackToMenu, handlePlayAgain}