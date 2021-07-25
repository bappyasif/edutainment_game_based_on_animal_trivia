import { EndingScreen } from '../all-layouts/EndingScreen';
import { showMenu } from './mainMenu';
import { addStartingScreenToDOM } from './startingScreen';
import { commenceCategorySelection } from './userInteraction';

const showEndingScreen = () => {
    document.body.innerHTML = '';
    document.body.append(EndingScreen());

    document
        .querySelector('#ed-playAgain')
        .addEventListener('click', handlePlayAgain);
    // document
    //     .querySelector('#ed-mainMenu')
    //     .addEventListener('click', handleBackToMenu);
};

const handleBackToMenu = () => {
    showMenu();
};

// const handlePlayAgain = () => {
//     // this is also in the mainMenu so maybe we could make this a fn
//     document.body.innerHTML = '';
//     addStartingScreenToDOM();
//     commenceCategorySelection();
// };

export { showEndingScreen, handleBackToMenu };
