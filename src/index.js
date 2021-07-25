import { showMenu } from './startup-components/mainMenu';
import { addingStartingScreenToDOM } from './startup-components/startingScreen';
import { commenceCategorySelection } from './startup-components/userInteraction';

showMenu();
document.querySelector('#playBtn').addEventListener('click', () => {
    document.body.innerHTML = '';
    addingStartingScreenToDOM();
    commenceCategorySelection();
});
// adding starting screen to DOM
// addingStartingScreenToDOM();

// listening for category selection, and this will also commence Question Round from it
// commenceCategorySelection();
