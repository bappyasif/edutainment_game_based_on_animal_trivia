import { transitionToQuestionRound } from "../../all-components/question-round/beforeGameplay";

export let chosenCategory = (category) => {
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