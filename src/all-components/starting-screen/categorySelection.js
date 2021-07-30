import { $ } from '../../all-utils/for-dom-calls';
import { transitionToQuestionRound } from '../question-round/beforeGameplay';
// import { chosenCategory } from "../../all-utils/for-starting-screen";

const commenceCategorySelection = () => {
    Array.from($('#categories').children).forEach((child) => {
        child.addEventListener('click', handleCategorySelection);
    });
    // $('#categories').addEventListener('click', handleCategorySelection);
};

const handleCategorySelection = (e) => {
    transitionToQuestionRound(e.currentTarget.dataset.category);
};

// const chosenCategory = (category) => {
//     switch (category) {
//         case 'mammals':
//             break;
//         case 'birds':
//             break;
//         case 'fishes':
//             break;
//         case 'reptilesAndAmphibians':
//             break;
//         default:
//             console.log("something's wrong!!");
//     }
//     // transitioning to question round
//     transitionToQuestionRound(category);
// };

export default commenceCategorySelection;
