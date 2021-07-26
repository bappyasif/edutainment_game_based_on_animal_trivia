import { MainMenu } from "../../all-layouts/MainMenu";
import { $, clearScreen } from "../../all-utils/for-dom-calls";
import { handleButtons } from "../../all-utils/for-main-menu";


export const showMenu = () => {
    clearScreen();
    document.body.append(MainMenu());
    configuringButtons();
};

let configuringButtons = () => {
    $('#playBtn').addEventListener('click', handleButtons);
    // whene there are more, we can configure them all in here
}