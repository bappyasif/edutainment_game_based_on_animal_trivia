import { MainMenu } from '../all-layouts/MainMenu';
import { addingStartingScreenToDOM } from './startingScreen';
import { commenceCategorySelection } from './userInteraction';

export const showMenu = () => {
    document.body.innerHTML = '';
    document.body.append(MainMenu());
};
