import Star from './Star';

const QuestionRound = (mode = 'easy') => {
    const stars = new Array(5).fill(Star()).join('');

    return document.createRange().createContextualFragment(
        `<div class="question-round" data-mode="${mode}">
        ${
            mode === 'hard'
                ? `<div class='tooltip-container'>
                    <div class="law-used">law used</div>
                    <div id='truth-table'></div>
                </div>`
                : ``
        }

            <div class="header">
                <div id="correct-score" class="score">${stars}</div>
                <div id="wrong-score" class="score">${stars}</div>
            </div>
            
            <div class="container">
                <div class="question">
                    <p id="question" class="question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>


                ${
                    // only show the twister statement if mode is hard
                    mode === 'hard'
                        ? `
                        <div class="twister">
                            <p id="twister" class="question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>`
                        : ''
                }

                <div id="choices" class="choices">
                    <button data-answer="true" class="choices__btn">True</button>
                    <button data-answer="false" class="choices__btn">Myth</button>
                </div>

                <!-- Explanation Modal -->
                <div class="backdrop">
                    <div class="modal">
                        <div class="modal__container container--vertical" id="explanation">
                            <p class="modal__title" id="result">Wrong!</p>
                            <p class="modal__body" id="explanation-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto officiis cumque pariatur odit impedit. Reprehenderit non dolores omnis est minima!
                            </p>
                            <button class="btn--secondary" id="next-question">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
};

export default QuestionRound;
