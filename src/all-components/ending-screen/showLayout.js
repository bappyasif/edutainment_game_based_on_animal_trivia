import EndingScreen from '../../all-layouts/EndingScreen';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import { handleBackToMenu, handlePlayAgain } from './buttonsConfiguration';

export const showEndingScreen = (starsCount) => {
    clearScreen();
    document.body.append(EndingScreen(starsCount));
    handleButtons();
};

let handleButtons = () => {
    $('#ed-playAgain').addEventListener('click', handlePlayAgain);
    $('#ed-mainMenu').addEventListener('click', handleBackToMenu);
};
