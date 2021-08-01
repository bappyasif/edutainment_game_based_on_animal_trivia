import EndingScreen from '../../all-layouts/EndingScreen';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import { handleBackToMenu, handlePlayAgain } from './buttonsConfiguration';

export const showEndingScreen = (starsCount, mode) => {
    clearScreen();
    document.body.append(EndingScreen(starsCount));
    handleButtons(mode);
};

let handleButtons = (mode) => {
    $('#ed-playAgain').addEventListener('click', () => handlePlayAgain(mode));
    $('#ed-mainMenu').addEventListener('click', handleBackToMenu);
};
