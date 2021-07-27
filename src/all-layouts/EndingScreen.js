import Star from './star';

export const EndingScreen = (score = 0) =>
    document.createRange().createContextualFragment(`
    <div class="container">
        <h1 class="title">Your score is X</h1>
        <div class="score">
            ${new Array(5)
                .fill()
                .map((_, i) => Star(i < score ? 'yellow' : 'red'))
                .join('')}
        </div>
        <p class="message">Too bad... Try again later</p>
        <div class="controls">
            <button id="ed-playAgain" class="controls__btn">Play Again</button>
            <button id="ed-mainMenu" class="controls__btn">Main Menu</button>
        </div>
    </div>
`);
