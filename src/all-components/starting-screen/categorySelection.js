import { $ } from "../../all-utils/for-dom-calls";
import { transitionToQuestionRound } from "../question-round/beforeGameplay";
// import { chosenCategory } from "../../all-utils/for-starting-screen";


export let commenceCategorySelection = () => {
    $('.categories-container').addEventListener('click', handleCategorySelection);
};

let handleCategorySelection = (evt) => {
    let category = evt.target.parentNode.classList[0];
    chosenCategory(category);
};

let chosenCategory = (category) => {
    switch (category) {
        case 'mammals':
            break;
        case 'birds':
            break;
        case 'fishes':
            break;
        case 'reptiles-and-amphibians':
            break;
        default:
            console.log("something's wrong!!");
    }
    // transitioning to question round
    transitionToQuestionRound(category);
};