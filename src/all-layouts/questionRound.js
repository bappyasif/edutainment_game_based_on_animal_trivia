import Star from "./star";

let star = Star('');

// let yellowStar = Star('yellow');
// let redStar = Star('red');

export let createQuestionRoundLayout = () => {
    let htmlMarkup = document.createRange().createContextualFragment(
        `<div class="question-round-container">
            <div class="scoring">
                <div class="correct-scores">
                    <div class="star">${star}</div>
                    <div class="star">${star}</div>
                    <div class="star">${star}</div>
                    <div class="star">${star}</div>
                    <div class="star">${star}</div>
                </div>
                <div class="wrong-scores">
                    <div class="star-img">${star}</div>
                    <div class="star-img">${star}</div>
                    <div class="star-img">${star}</div>
                    <div class="star-img">${star}</div>
                    <div class="star-img">${star}</div>
                </div>
            </div>            
            <div class="topic">
                <div class="text">Topic Sentence: humans can breath under water</div>
            </div>
            <div class="statement-twister">
                <div class="text">Statement Twister: sun rises in west</div>
            </div>
            <div class="explain-why">
                <div class="text">Modal View:
                this is why it is as such, explaining them yada yada</div>
                <br />
                <button class="explain-question">Close / Continue</button>
            </div>
            <div class="added-layers">
                <div class="round-sprite">
                    <img src="http://placeimg.com/110/110/any" alt="">
                </div>
            </div>
            <div class="answer-options">
                <button class="correct">True</button>
                <button class="myth">Myth</button>
            </div>
        </div>`
    ).firstChild

    return htmlMarkup;
}
