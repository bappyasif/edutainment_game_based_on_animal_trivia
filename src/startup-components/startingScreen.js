import { creatingStartingScreenLayout } from "../all-layouts/creatingStartingScreenLayout"

export let addingStartingScreenToDOM = () => {
    let startingScreen = creatingStartingScreenLayout();
    document.body.append(startingScreen);
}