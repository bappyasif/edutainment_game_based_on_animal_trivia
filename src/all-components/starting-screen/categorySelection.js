import { $ } from '../../all-utils/for-dom-calls';
import { transitionToQuestionRound } from '../question-round/beforeGameplay';

const commenceCategorySelection = (mode) => {
    Array.from($('#categories').children).forEach((child) => {
        child.addEventListener('click', (e) =>
            transitionToQuestionRound(e.currentTarget.dataset.category, mode)
        );
    });
};

// const handleCategorySelection = (category, mode) => {
//     transitionToQuestionRound(category, mode);
// };

export default commenceCategorySelection;
