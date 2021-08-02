const About = () => {
    return document.createRange().createContextualFragment(`
        <div class="modal">
            <div class="modal__container container--vertical">
                <p class="modal__title">About</p>              
                <p class="modal__body" style="--modal-body-mb: 2rem;">
                    Bust common animal myths in this trivia game! This game was made for The Odin Project's first game jam with the theme Edutainment.
                </p>
                <p class="modal__subtitle">References</p>
                <p class="modal__body">
                    All credits for the questions in this game goes to their rightful owner. See full list of references <a href="https://github.com/bappyasif/edutainment_game_based_on_animal_trivia#references" target="_blank" rel="noreferrer noopener">here</a>
                </p>
                
            </div>
        </div>
    `);
};

export default About;
