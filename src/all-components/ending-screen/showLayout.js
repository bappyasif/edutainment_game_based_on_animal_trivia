import EndingScreen from '../../all-layouts/EndingScreen';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import { handleBackToMenu, handlePlayAgain } from './buttonsConfiguration';

export const showEndingScreen = (starsCount, category) => {
    clearScreen();
    document.body.append(EndingScreen(starsCount));
    handleButtons(category);
};

let handleButtons = (category) => {
    $('#ed-playAgain').addEventListener('click', () => handlePlayAgain(category));
    $('#ed-mainMenu').addEventListener('click', handleBackToMenu);
};
