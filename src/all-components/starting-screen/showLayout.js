import StartingScreen from '../../all-layouts/StartingScreen';
import { $ } from '../../all-utils/for-dom-calls';
import showMenu from '../main-menu/showLayout';

const showStartingScreen = () => {
    document.body.append(StartingScreen());
    $('#backToMenu').addEventListener('click', () => showMenu());
};

export default showStartingScreen;
