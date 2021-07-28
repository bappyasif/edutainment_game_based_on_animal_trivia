import { $, $all } from '../../all-utils/for-dom-calls';

// depending on which sides of stars needs to be painted,
// this function will call check existing with appropriate parameters depending on user response
export const fillStars = (response) => {
    return response === 'correct'
        ? checkExisting('correct-scores', 'yellow')
        : checkExisting('wrong-scores', 'red');
};

// trying to paint over existing stars, by adding a class name "filled-yellow" or "filled-red"
// if there is none, then immediately filled svg with passed in color value from parmeter
let checkExisting = (whichSide, color) => {
    let count = 0;
    $all(`.${whichSide} .star`).forEach((node) => {
        if (!node.classList.value.includes('filled') && count !== 1) {
            node.classList.add('filled-' + color);
            // incrementing counter so that it can not be paint more than one node at a time
            count++;
        }
    });
};
