import { $ } from '../../all-utils/for-dom-calls';
import { transitionToQuestionRound } from '../question-round/beforeGameplay';
// import { chosenCategory } from "../../all-utils/for-starting-screen";

const commenceCategorySelection = (mode) => {
    Array.from($('#categories').children).forEach((child) => {
        // child.addEventListener('click', handleCategorySelection);
        child.addEventListener('click', evt => handleCategorySelection(evt, mode));
    });
};

const handleCategorySelection = (e, mode) => {
    console.log('here!!', mode)
    transitionToQuestionRound(e.currentTarget.dataset.category, mode);
};

export default commenceCategorySelection;
