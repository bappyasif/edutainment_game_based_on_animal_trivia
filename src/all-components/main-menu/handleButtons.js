import { creatingDifficultyLevelLayout } from '../../all-layouts/difficultyLevel';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import commenceCategorySelection from '../starting-screen/categorySelection';
import showStartingScreen from '../starting-screen/showLayout';

const handleButtons = (mode) => {
    clearScreen();
    showStartingScreen();
    commenceCategorySelection(mode);
};

let handleGameModeSelection = (evt) => {
    if(evt.target.id == 'mode-easy') {
        handleButtons('easy');
    } else if(evt.target.id == 'mode-hard') {
        handleButtons('hard');
    }
}

export let handleShowDifficultyMode = () => {
        // bringing layout
        const difficultyLayout = creatingDifficultyLevelLayout();
        $('.nav').append(difficultyLayout);
        $('.mode-card').addEventListener('click', handleGameModeSelection);
}

export default handleButtons;
