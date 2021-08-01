const StartingScreen = () => {
    return document.createRange().createContextualFragment(`
        <div id="starting-screen" class="starting-screen">
            <h1 class="prompt">Choose a category</h1>
            <div id="categories" class="categories">
                <div data-category="mammals" class="category container container--vertical">
                    <img class="category__image" src="images/mammals.png" alt="mammals">
                    <p class="category__text">Mammals</p>
                </div>
                <div data-category="birds" class="category container container--vertical">
                    <img class="category__image" src="images/birds.png" alt="birds">
                    <p class="category__text">Birds</p>
                </div>
                <div data-category="reptilesAndAmphibians" class="category container container--vertical">
                    <img class="category__image" src="images/reptilesAndAmphibians.png" alt="reptilesAndAmphibians">
                    <p class="category__text">Reptiles / Amphibians</p>
                </div>
                <div data-category="fishes" class="category container container--vertical">
                    <img class="category__image" src="images/fishes.png" alt="fishes">
                    <p class="category__text">Fishes</p>
                </div>
            </div>
            <span id="backToMenu" class="return-button">&#8249; Back to menu</span>
        </div>
    `);
};

export default StartingScreen;
