import Star from './star';

const EndingScreen = (score = 0) =>
    document.createRange().createContextualFragment(`
    <div class="ending-screen">
        <div class="container container--vertical">
            <h1 class="score__text">Your score is X</h1>
            <div class="score__stars">
                ${new Array(5)
                    .fill()
                    .map((_, i) => Star(i < score ? 'yellow' : 'red'))
                    .join('')}
            </div>
            <p class="score__message">Too bad... Try again later</p>
            <div class="controls">
                <button id="ed-playAgain" class="controls__btn">Play Again</button>
                <button id="ed-mainMenu" class="controls__btn">Main Menu</button>
            </div>
        </div>
    </div>
`);

export default EndingScreen;
