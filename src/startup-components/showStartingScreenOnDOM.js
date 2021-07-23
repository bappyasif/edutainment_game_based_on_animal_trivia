import creatingStartingScreenLayout from "../all-layouts/creatingStartingScreenLayout";
import "../../previous-drafts/layouts-draft/css/startingScreenStyle.css";

export let showStartingScreenOnDOM = () => {
    let startingScreen = creatingStartingScreenLayout();
    document.body.append(startingScreen);
}