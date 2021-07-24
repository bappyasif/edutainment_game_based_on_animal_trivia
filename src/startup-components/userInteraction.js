import { transitioningToQuestionRound } from "../questions-round";

export let commenceCategorySelection = () => {
    let categoriesContainer = document.querySelector('.categories-container');
    categoriesContainer.addEventListener("click", handleCategorySelection)
}

let handleCategorySelection = evt => {
    let category = evt.target.parentNode.classList[0];
    chosenCategory(category)
}

// i can use "if - else if" statement if that makes more sense
let chosenCategory = category => {
    switch(category) {
        case "mammals": 
            break;
        case "birds":
            break;
        case "fishes":
            break;
        case "reptiles-and-amphibians":
            break;
        default:
            console.log("something's wrong!!");
    }
    // transitioning to question round
    transitioningToQuestionRound(category)
}