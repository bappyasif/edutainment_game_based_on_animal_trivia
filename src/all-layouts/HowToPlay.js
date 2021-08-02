// assume that how to play is only shown for hard mode
// since easy mode is quite straightforward already
const HowToPlay = (isInQuestionRound = false) => {
    const easyInstructions = `
        <p class="modal__subtitle">Easy</p>
        <p class="modal__body" style="--modal-body-mb: 2rem;">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto officiis cumque pariatur odit impedit. Reprehenderit non dolores omnis est minima!
        </p>
    `;

    const hardInstructions = `
        <p class="modal__subtitle">Hard</p>
        <p class="modal__body" style="--modal-body-mb: 2rem;">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto officiis cumque pariatur odit impedit. Reprehenderit non dolores omnis est minima!
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
