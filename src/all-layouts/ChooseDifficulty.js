const ChooseDifficulty = () =>
    document.createRange().createContextualFragment(
        `<div class="modal" style="--modal-width: 40%; --modal-my: 10%;">
            <div class="modal__container container--vertical">
                <p class="modal__title">Choose diffuculty</p>
                <div class="difficulty container--vertical" id="difficulty">
                    <button data-value="easy" class="difficulty__btn btn--secondary">Easy</button>
                    <button data-value="hard" class="difficulty__btn btn--secondary">Hard</button>
                </div>
            </div>
        </div>`
    );

export default ChooseDifficulty;
