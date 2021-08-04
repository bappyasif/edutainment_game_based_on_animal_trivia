// assume that how to play is only shown for hard mode
// since easy mode is quite straightforward already
// isInQuestionRound is a variable that is stored locally so that it can detect if player is playing it for first time or not
const HowToPlay = (isInQuestionRound = false) => {
    const easyInstructions = `
        <p class="modal__subtitle">Easy Mode</p>
        <p class="modal__body" style="--modal-body-mb: 2rem;">
            You will be provided a statement and you have to decide if it is True or a Myth. It's that simple!
        </p>
    `;

    const hardInstructions = `
        <p class="modal__subtitle">Hard Mode</p>
        <p class="modal__body" style="--modal-body-mb: 2rem;">
            You will be provided two statements A and B, and a "law" that you have to use and check against a given table and see where it fits.<br/><br/>  
            <span class="modal__subtitle">Example:</span><br/>
            <strong>Statement A</strong> is False <br/>
            <strong>Statement B</strong> is False <br/><br/>
            <strong>Law Used:</strong> Implication <br/>
            <strong>Answer:</strong> True <br/><br/>
            <strong>Explanation:</strong> Implication Logic is FALSE if "A" is true and "B" is false. The rest of the cases are TRUE. In this example, A and B are false, therefore the answer is true.<br/><br/>
            ${
                isInQuestionRound
                    ? '<em>To see the table and for more information, just click the <strong>help button (?)</strong> at the bottom right of the screen</em>'
                    : ''
            }
        </p>
    `;

    return document.createRange().createContextualFragment(`
        <div class="modal">
            <div class="modal__container container--vertical">
                <p class="modal__title">How To Play</p>              
                ${
                    isInQuestionRound
                        ? hardInstructions
                        : [easyInstructions, hardInstructions].join('\n')
                }
            </div>
        </div>
    `);
};

export default HowToPlay;
