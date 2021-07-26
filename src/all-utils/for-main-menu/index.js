import { commenceCategorySelection } from "../../all-components/starting-screen/categorySelection";
import { addStartingScreenToDOM } from "../../all-components/starting-screen/showLayout";
import { clearScreen } from "../for-dom-calls";

export let handleButtons = () => {
    clearScreen();
    addStartingScreenToDOM();
    commenceCategorySelection();
}