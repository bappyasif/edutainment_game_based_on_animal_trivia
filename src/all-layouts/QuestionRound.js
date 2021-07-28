import Star from './Star';

const QuestionRound = (mode = 'easy') => {
    // Changes to selectors
    // .scoring -->
    // .correct-scores --> #correct-score
    // .wrong-scores --> #wrong-score
    // .topic --> #question
    // .explain-why --> #explanation
    // .explain-question --> #next-question
    // .answer-options --> #choices
    // .correct --> data-answer="true"
    // .myth --> data-answer="false"
    const stars = new Array(5).fill(Star()).join('');

    return document.createRange().createContextualFragment(
        `<div class="question-round" data-mode="${mode}">
            <div class="header">
                <div id="correct-score" class="score">${stars}</div>
                <div id="wrong-score" class="score">${stars}</div>
            </div>   
            <div class="container">
                <div class="question">
                    <p id="question" class="question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>

                <!-- Twister Question
                ${
                    // only show the twister statement if mode is hard
                    mode === 'hard'
                        ? `<div id="twister" class="question question--twister">
                            <p class="question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>`
                        : ''
                }
                -->

                <div id="choices" class="choices">
                    <button data-answer="true" class="choices__btn">True</button>
                    <button data-answer="false" class="choices__btn">Myth</button>
                </div>

                <!-- Explanation Modal -->
                <div class="backdrop">
                    <div class="modal">
                        <div id="explanation" class="explanation modal__container container container--vertical">
                            <p id="result" class="result">Wrong!</p>
                            <p id="explanation-text" class="explanation__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto officiis cumque pariatur odit impedit. Reprehenderit non dolores omnis est minima!
                            </p>
                            <button id="next-question" class="explanation__button">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );

    //     <!--
    //     <div class="statement-twister">
    //         <div class="text">Statement Twister: sun rises in west</div>
    //     </div>
    //     <div class="added-layers">
    //         <div class="round-sprite">
    //             <img src="http://placeimg.com/110/110/any" alt="">
    //         </div>
    //     </div>
    //     -->
};

export default QuestionRound;
