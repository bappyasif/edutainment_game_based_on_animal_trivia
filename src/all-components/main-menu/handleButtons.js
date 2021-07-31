import { creatingDifficultyLevelLayout } from '../../all-layouts/difficultyLevel';
import { $, clearScreen } from '../../all-utils/for-dom-calls';
import commenceCategorySelection from '../starting-screen/categorySelection';
import showStartingScreen from '../starting-screen/showLayout';

const handleButtons = () => {
    // invoking difficulty level selection
    handleShowDifficultyMode();

    // clearScreen();
    // showStartingScreen();
    // commenceCategorySelection(mode);
};

// listens for user chosen game mode and initiate game with that chosen level
let handleGameModeSelection = (evt) => {
    if(evt.target.id == 'mode-easy') {
        // handleButtons('easy');
        initiatingCategorySelection('easy');
    } else if(evt.target.id == 'mode-hard') {
        // handleButtons('hard');
        initiatingCategorySelection('hard');
    }
}

// concerns about firing up category selection process from "starting screen" module
let initiatingCategorySelection = (mode) => {
    clearScreen();
    showStartingScreen();
    commenceCategorySelection(mode);
}

// showing up difficulty mode selection layout and enabling user selection
let handleShowDifficultyMode = () => {
        // bringing layout
        const difficultyLayout = creatingDifficultyLevelLayout();
        $('.nav').append(difficultyLayout);
        $('.mode-card').addEventListener('click', handleGameModeSelection);
}

export default handleButtons;
