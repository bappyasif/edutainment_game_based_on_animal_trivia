import { clearScreen } from "../../all-utils/for-dom-calls";
import { commenceCategorySelection } from "../starting-screen/categorySelection";
import { addStartingScreenToDOM } from "../starting-screen/showLayout";

export let handleButtons = () => {
    clearScreen();
    addStartingScreenToDOM();
    commenceCategorySelection();
}