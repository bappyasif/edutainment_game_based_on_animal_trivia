import { createStartingScreenLayout } from "../../all-layouts/startingScreen";

export let addStartingScreenToDOM = () => {
    let startingScreen = createStartingScreenLayout();
    document.body.append(startingScreen);
};