export const EndingScreen = () =>
    document.createRange().createContextualFragment(`
    <div class="container">
        <h1 class="title">Your score is X</h1>
        <div class="score">
            <div class="star--yellow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffbf00"
                    fill="#ffbf00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                    />
                </svg>
            </div>
            <div class="star--yellow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffbf00"
                    fill="#ffbf00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                    />
                </svg>
            </div>
            <div class="star--red">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff2825"
                    fill="#ff2825"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                    />
                </svg>
            </div>
            <div class="star--red">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff2825"
                    fill="#ff2825"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                    />
                </svg>
            </div>
            <div class="star--red">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff2825"
                    fill="#ff2825"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                    />
                </svg>
            </div>
        </div>
        <p class="message">Too bad... Try again later</p>
        <div class="controls">
            <button class="controls__btn">Play Again</button>
            <button class="controls__btn">Main Menu</button>
        </div>
    </div>
`);
