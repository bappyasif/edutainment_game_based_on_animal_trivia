import { clearScreen } from '../../all-utils/for-dom-calls';
import showMenu from '../main-menu/showLayout';
import commenceCategorySelection from '../starting-screen/categorySelection';
import showStartingScreen from '../starting-screen/showLayout';

const handleBackToMenu = () => {
    showMenu();
};

const handlePlayAgain = (mode) => {
    // this is also in the mainMenu so maybe we could make this a fn
    clearScreen();
    showStartingScreen();
    commenceCategorySelection(mode);
    // console.log(mode, 'here');
};

export { handleBackToMenu, handlePlayAgain };
