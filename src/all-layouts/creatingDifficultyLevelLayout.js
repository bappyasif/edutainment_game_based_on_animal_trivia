let creatingDifficultyLevelLayout = () => {
    let htmlMarkup = document.createRange().createContextualFragment(
        `<div class="difficulty-container">
            <div class="test-text">background visibility, background visibility, 
                background visibility, background visibility
            </div>
            <div class="mode-card">
                <h2>choose diffuculty</h2>
                <p id="mode-easy">easy</p>
                <p id="mode-hard">hard</p>
                <button id="mode-play">play</button>
            </div>
        </div>`
    ).firstChild;

    return htmlMarkup;
}

module.exports = creatingDifficultyLevelLayout;