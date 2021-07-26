import { createQuestionRoundLayout } from "../../all-layouts/questionRound";
import { clearScreen } from "../../all-utils/for-dom-calls";

// showing question round layout on DOM
export let showLayout = () => {
    clearScreen()
    let questionRound = createQuestionRoundLayout();
    document.body.append(questionRound);
};