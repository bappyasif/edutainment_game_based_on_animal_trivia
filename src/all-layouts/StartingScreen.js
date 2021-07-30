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
            <span class="return-button">&#8249; Back to menu</span>
        </div>
    `);
};

// `<div class="starting-screen-container">
//             <header>Choose category</header>
//             <div class="categories-container">
//                 <div class="mammals category">
//                     <div class="name">Mammals</div>
//                     <img src="https://via.placeholder.com/400vwx200vh" alt="mammals">
//                 </div>
//                 <div class="birds category">
//                     <div class="name">Birds</div>
//                     <img src="https://via.placeholder.com/400vwx200vh" alt="birds">
//                 </div>
//                 <div class="fishes category">
//                     <div class="name">Fishes</div>
//                     <img src="https://via.placeholder.com/400vwx200vh" alt="fishes">
//                 </div>
//                 <div class="reptilesAndAmphibians category">
//                     <div class="name">Reptiles And Amphibians</div>
//                     <img src="https://via.placeholder.com/400vwx200vh" alt="reptiles-and-amphibians">
//                 </div>
//             </div>
//         </div>`

export default StartingScreen;
