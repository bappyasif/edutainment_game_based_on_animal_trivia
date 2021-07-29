import Star from './Star';

const EndingScreen = (noOfCorrect = 0) => {
    const showMessage = () => {
        // SUGGESTION: add another message for score of 3
        if (noOfCorrect === 3) {
            return 'Not bad';
        }

        if (noOfCorrect > 2) {
            return 'Winner winner chicken dinner!!';
        }

        return 'Too bad... Try again later';
    };

    return document.createRange().createContextualFragment(`
    <div class="ending-screen">
        <div class="container container--vertical">
            <h1 class="score__text">Your score is ${noOfCorrect} out of 5</h1>
            <div class="score__stars">
                ${new Array(5)
                    .fill()
                    .map((_, i) =>
                        Star(i < noOfCorrect ? 'yellow' : 'red', 'large')
                    )
                    .join('')}                
            </div>
            <p class="score__message">${showMessage()}</p>
            <div class="controls">
                <button id="ed-playAgain" class="controls__btn">Play Again</button>
                <button id="ed-mainMenu" class="controls__btn">Main Menu</button>
            </div>
        </div>
    </div>
`);
};

// let drawStars = (score, result) => {
//     if (result == 'winner') {
//         return new Array(5)
//             .fill()
//             .map((_, i) => Star(i < score ? 'yellow' : 'red', 'large'))
//             .join('');
//     } else {
//         return new Array(5)
//             .fill()
//             .map((_, i) => Star(i < score ? 'red' : 'yellow', 'large'))
//             .join('');
//     }
// };

export default EndingScreen;
