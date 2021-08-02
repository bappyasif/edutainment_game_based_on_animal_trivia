// assume that how to play is only shown for hard mode
// since easy mode is quite straightforward already
// isInQuestionRound is a variable that is stored locally so that it can detect if player is playing it for first time or not
const HowToPlay = (isInQuestionRound = false) => {
    const easyInstructions = `
        <p class="modal__subtitle">Easy Mode</p>
        <p class="modal__body" style="--modal-body-mb: 2rem;">
            you will be provided a Statement and you have to decide if it is True or a Myth, it's that simple, are you ready for it? just click <strong>Play</strong> and begin with your preffered <strong>Difficulty Level</strong> and see how many myths you busted!!
        </p>
    `;

    const hardInstructions = `
        <p class="modal__subtitle">Hard Mode</p>
        <p class="modal__body" style="--modal-body-mb: 2rem;">
        <strong>Info:</strong> you will be proivided Two Statements, and a "Law" that you have to use and check against a given Table, that you will find bottom of this screen (?), and see where it fits. <br /> <br />
            <strong>for example:</strong> <br />
            <strong>Statement (A): is false </strong> <br />
            <strong>Statement (B): is false </strong> <br /> <br />
            <strong>Law Used: is Implication </strong> <br />
            <strong>Answer: should be True </strong> (<i>if it was "Easy Mode" answer would be "False" </i>)<br /> <br />
            <strong>Explanation:</strong> Implication law says, if your begining statement/logic is false and any derevative statement/logic after that, whether True/Fale be Implied as True,
            you will find full Table showing all possible options Or combinations by clicking <strong>(?)</strong> from <strong>bottom right</strong> corner of this screen  
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
