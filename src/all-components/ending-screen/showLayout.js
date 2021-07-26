import { EndingScreen } from "../../all-layouts/EndingScreen";
import { $, clearScreen } from "../../all-utils/for-dom-calls";
import { handleBackToMenu, handlePlayAgain } from "./buttonsConfiguration";

export const showEndingScreen = () => {
    clearScreen();
    document.body.append(EndingScreen());
    handleButtons();
    
};

let handleButtons = () => {
    $('#ed-playAgain')
        .addEventListener('click', handlePlayAgain);
    $('#ed-mainMenu')
        .addEventListener('click', handleBackToMenu);
}

