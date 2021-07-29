import { $all } from '../../all-utils/for-dom-calls';

// this isn't really "announcing" the scores
// rather it is counting the scores
// so I think naming this as countScore is more appropriate
const countScore = () => {
    // since we know that we only have 5 questions per round
    // and that there's only two outcomes
    // all we really need to check is the number of correct answers
    const noOfCorrect = $all('.star--yellow').length;
    // const wrongs = $all('.star--red').length

    return noOfCorrect;
};

export default countScore;

// export {corrects, wrongs}
