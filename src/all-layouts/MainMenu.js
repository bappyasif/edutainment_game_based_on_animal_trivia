const MainMenu = () =>
    document.createRange().createContextualFragment(`
    <div class="background">
        <div class="container container--vertical">
            <h1 class="title">Myth Busters</h1>
            <div class="nav">
                <button id="playBtn" class="nav__btn">Play</button>
                <button class="nav__btn">How To Play</button>
                <button class="nav__btn">About</button>
            </div>
        </div>
    </div>
`);

export default MainMenu;
