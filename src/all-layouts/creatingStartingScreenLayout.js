export let creatingStartingScreenLayout = () => {
    let htmlMarkup = document.createRange().createContextualFragment(
        `<div class="container">
            <header>Choose category</header>
            <div class="categories-container">
                <div class="mammals category">
                    <div class="name">Mammals</div>
                    <img src="https://via.placeholder.com/400vwx200vh" alt="mammals">
                </div>
                <div class="birds category">
                    <div class="name">Birds</div>
                    <img src="https://via.placeholder.com/400vwx200vh" alt="birds">
                </div>
                <div class="fishes category">
                    <div class="name">Fishes</div>
                    <img src="https://via.placeholder.com/400vwx200vh" alt="fishes">
                </div>
                <div class="reptiles-and-amphibians category">
                    <div class="name">Reptiles And Amphibians</div>
                    <img src="https://via.placeholder.com/400vwx200vh" alt="reptiles-and-amphibians">
                </div>
            </div>
        </div>`
    ).firstChild;
    return htmlMarkup;
}
