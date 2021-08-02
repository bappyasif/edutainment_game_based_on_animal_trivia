import EndingScreen from '../../all-layouts/EndingScreen';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import { handleBackToMenu, handlePlayAgain } from './buttonsConfiguration';

export const showEndingScreen = (starsCount, mode) => {
    clearScreen();
    document.body.append(EndingScreen(starsCount));
    handleButtons(mode);

    // set isFirstTime to false after first showing of ending screen
    // this means that "How to Play" won't show on next games
    if (mode === 'hard') window.localStorage.setItem('isFirstTime', false);
};

let handleButtons = (mode) => {
    $('#ed-playAgain').addEventListener('click', () => handlePlayAgain(mode));
    $('#ed-mainMenu').addEventListener('click', handleBackToMenu);
};
