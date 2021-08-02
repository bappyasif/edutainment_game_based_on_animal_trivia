import MainMenu from '../../all-layouts/MainMenu';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import { handlePlay, showAbout, showHowToPlay } from './handleButtons';

const showMenu = () => {
    clearScreen();
    document.body.append(MainMenu());
    setupListeners();
};

const setupListeners = () => {
    $('#playBtn').addEventListener('click', handlePlay);
    $('#howToPlay').addEventListener('click', showHowToPlay);
    $('#about').addEventListener('click', showAbout);
};

export default showMenu;
