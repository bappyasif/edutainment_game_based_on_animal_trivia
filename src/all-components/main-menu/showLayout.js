import MainMenu from '../../all-layouts/MainMenu';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import handleButtons from './handleButtons';

const showMenu = () => {
    clearScreen();
    document.body.append(MainMenu());
    configuringButtons();
};

let configuringButtons = () => {
    $('#playBtn').addEventListener('click', handleButtons);
    // when there are more buttons from main menu, we can configure them all in here
    // $('#mode').addEventListener('click', handleShowDifficultyMode);
};

export default showMenu;
