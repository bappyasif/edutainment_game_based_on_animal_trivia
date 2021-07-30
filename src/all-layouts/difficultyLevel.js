export let creatingDifficultyLevelLayout = () => {
    let htmlMarkup = document.createRange().createContextualFragment(
        `<div class="difficulty-container">
            <div class="mode-card">
                <h2>choose diffuculty</h2>
                <button id="mode-easy" class="nav__btn">easy</button>
                <button id="mode-hard" class="nav__btn">hard</button>
            </div>
        </div>`
    ).firstChild;

    return htmlMarkup;
}
