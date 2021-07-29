import { $all } from '../../all-utils/for-dom-calls';

const countScore = () => {
    // since we know that we only have 5 questions per round
    // and that there's only two outcomes
    // all we really need to check is the number of correct answers
    // and dont have to count wrong answers at all
    const noOfCorrect = $all('.star--yellow').length;

    return noOfCorrect;
};

export default countScore;
