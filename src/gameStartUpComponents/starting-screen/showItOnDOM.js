const creatingStartingLayout = require("../../all-layouts/creatingStartingScreen");
// import "../../../previous-drafts/layouts-draft/css/startingScreenStyle.css"
// import styles from "../../../previous-drafts/layouts-draft/css/startingScreenStyle.css"

let addingStartingScreenToDOM = () => {
    applyingStylesForStartingScreen();

    let startingScreen = creatingStartingLayout();
    document.body.append(startingScreen);
}

let applyingStylesForStartingScreen = () => {
    let head = document.getElementsByTagName('head')[0];
    let cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    // cssLink.href = startingScreenStyles;
    head.append(cssLink);
}

module.exports = addingStartingScreenToDOM;