import ChooseDifficulty from '../../all-layouts/ChooseDifficulty';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import commenceCategorySelection from '../starting-screen/categorySelection';
import showStartingScreen from '../starting-screen/showLayout';

const showModal = (component) => {
    const modal = $('#mm-modal');
    modal.innerHTML = '';
    modal.appendChild(component);
    modal.style.display = 'block';

    modal.addEventListener('click', (e) => {
        if (e.target.matches('.backdrop')) {
            modal.style.display = 'none';
        }
    });
};

const handlePlay = () => {
    // invoking difficulty level selection
    showModal(ChooseDifficulty());
    // listens for user chosen game mode and initiate game with that chosen level
    $('#difficulty').addEventListener('click', (e) =>
        initiateCategorySelection(e.target.dataset.value)
    );
};

// concerns about firing up category selection process from "starting screen" module
const initiateCategorySelection = (mode) => {
    clearScreen();
    showStartingScreen();
    commenceCategorySelection(mode);
};

export { handlePlay };
