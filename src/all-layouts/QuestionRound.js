import Star from './Star';

const QuestionRound = (mode = 'easy') => {
    const stars = new Array(5).fill(Star()).join('');

    return document.createRange().createContextualFragment(
        `<div class="question-round" data-mode="${mode}">
            <div class="header">
                <div id="correct-score" class="score">${stars}</div>
                <div id="wrong-score" class="score">${stars}</div>
            </div>
            
            <div class="container">
                            
                ${
                    mode === 'hard'
                        ? '<p class="question__text" id="law" style="margin-bottom: 2rem; color: white"></p>'
                        : ''
                }

                <div class="question">
                    <p id="question" class="question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>

                ${
                    // only show the twister statement if mode is hard
                    mode === 'hard'
                        ? `<div class="twister"><p id="twister" class="question__text"></p></div>`
                        : ''
                }

                <div id="choices" class="choices">
                    <button data-answer="true" class="btn--secondary choices__btn">True</button>
                    <button data-answer="false" class="btn--secondary choices__btn">${
                        mode === 'hard' ? 'False' : 'Myth'
                    }</button>
                </div>

                <!-- Explanation Modal -->
                <div id="explanation-modal" class="backdrop">
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

                ${
                    mode === 'hard'
                        ? `
                            <!-- Help Modal -->
                            <div id="help-modal" class="backdrop">
                                <div class="modal">
                                    <div class="modal__container container--vertical" id="truth-table"></div>
                                </div>
                            </div>

                            <!-- Help Button -->
                            <button id="help" class="help">
                                <div class="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="68" height="68" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                        <line x1="12" y1="19" x2="12" y2="19.01" />
                                    </svg>
                                    <span class="tooltip__text">More Information</span>
                                </div>                    
                            </button>
                        `
                        : ''
                }
                
                <!-- How To Play Modal -->
                <div id="instructions" class="backdrop"></div>
                
                <a class="attribution" href="https://www.vecteezy.com/free-vector/nature">Nature Vectors created by Graphics RF from Vecteezy</a>
            </div>
        </div>`
    );
};

export default QuestionRound;
