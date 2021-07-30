import { clearScreen } from '../../all-utils/for-dom-calls';
import commenceCategorySelection from '../starting-screen/categorySelection';
import showStartingScreen from '../starting-screen/showLayout';

const handleButtons = () => {
    clearScreen();
    showStartingScreen();
    commenceCategorySelection();
};

export default handleButtons;
