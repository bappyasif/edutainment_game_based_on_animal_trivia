const MainMenu = () =>
    document.createRange().createContextualFragment(`
    <div id="main-menu" class="background">
        <div class="container container--vertical">
            <h1 class="title">Myth Busters</h1>
            <div class="nav">
                <button class="btn--primary nav__btn" id="playBtn">Play</button>
                <button class="btn--primary nav__btn">How To Play</button>
                <button class="btn--primary nav__btn">About</button>
            </div>
        </div>

        <!-- Modal -->
        <div id="mm-modal" class="backdrop"></div>
    </div>
`);

export default MainMenu;
