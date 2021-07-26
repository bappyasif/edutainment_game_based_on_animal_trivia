import { $ } from "../../all-utils/for-dom-calls";
import { chosenCategory } from "../../all-utils/for-starting-screen";


export let commenceCategorySelection = () => {
    $('.categories-container').addEventListener('click', handleCategorySelection);
};

let handleCategorySelection = (evt) => {
    let category = evt.target.parentNode.classList[0];
    chosenCategory(category);
};
