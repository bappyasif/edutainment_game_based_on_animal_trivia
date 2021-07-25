import { addingStartingScreenToDOM } from './startup-components/startingScreen';
import { commenceCategorySelection } from './startup-components/userInteraction';

// adding starting screen to DOM
addingStartingScreenToDOM();

// listening for category selection, and this will also commence Question Round from it
commenceCategorySelection();
