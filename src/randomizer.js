const data = {
    mammals: [
        {
            question: 'test',
            answer: true,
            explanation: 'this is a test',
        },
    ],
};

export const getQuestions = (category) => {
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

    // returns a question iterator
    return { reset, next: nextQuestion }; // i tried to test from index.js but it's actually showing entire code for nextQuestion()
};
