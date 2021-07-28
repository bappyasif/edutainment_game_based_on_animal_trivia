import { $, $all } from '../../all-utils/for-dom-calls';

// depending on which sides of stars needs to be painted,
// this function will call check existing with appropriate parameters depending on user response
const fillStars = (isCorrect) => {
    return isCorrect
        ? updateStars('#correct-score', 'yellow')
        : updateStars('#wrong-score', 'red');
};

// trying to paint over existing stars, by adding a class name "filled-yellow" or "filled-red"
// if there is none, then immediately filled svg with passed in color value from parmeter
const updateStars = (side, color) => {
    let count = 0;
    $all(`${side} .star`).forEach((star) => {
        if (
            !star.className.baseVal.includes('star--yellow') &&
            !star.className.baseVal.includes('star--red') &&
            count !== 1
        ) {
            star.classList.add(`star--${color}`);
            // incrementing counter so that it can not be paint more than one node at a time
            count++;
        }
    });
};

export default fillStars;
