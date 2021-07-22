const data = {
    mammals: [
        {
            question: 'test',
            answer: true,
            explanation: 'this is a test',
        },
    ],
};

/**
 * @typedef {Object} QuestionIterator
 * @property {function} next - Returns a question
 * @property {function} reset - Reset tracked questions
 */

/**
 *
 * @param {string} category - Any of of the following: mammals, birds, fishes, reptilesAndAmphibians
 * @returns {QuestionIterator} - A question iterator
 */
const getQuestions = (category) => {
    const categoryData = data[category];
    let prevQuestions = [];

    const nextQuestion = () => {
        // if we run out of questions, return undefined
        if (prevQuestions.length === categoryData.length) return;

        let idx;
        do {
            idx = Math.floor(Math.random() * categoryData.length);
        } while (prevQuestions.includes(idx));
        prevQuestions.push(idx);

        return categoryData[idx];
    };

    const reset = () => {
        prevQuestions = [];
    };

    return { reset, next: nextQuestion }; // i tried to test from index.js but it's actually showing entire code for nextQuestion()
};

module.exports = getQuestions;
