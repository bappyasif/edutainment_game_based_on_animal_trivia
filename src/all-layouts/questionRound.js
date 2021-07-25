export let createQuestionRoundLayout = () => {
    let htmlMarkup = document.createRange().createContextualFragment(
        `<div class="container">
            <div class="scoring">
                <div class="correct-scores">
                    <img class="star-img" src="http://lorempixel.com/50/50/" alt="01">
                    <img class="star-img" src="http://lorempixel.com/50/50/" alt="02">
                    <img class="star-img" src="http://lorempixel.com/50/50/" alt="03">
                    <img class="star-img" src="http://lorempixel.com/50/50/" alt="04">
                </div>
                <div class="wrong-scores">
                    <img class="star-img" src="https://placebear.com/50/50" alt="01">
                    <img class="star-img" src="https://placebear.com/50/50" alt="02">
                    <img class="star-img" src="https://placebear.com/50/50" alt="03">
                    <img class="star-img" src="https://placebear.com/50/50" alt="04">
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
