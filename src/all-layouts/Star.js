const SIZE = {
    small: 50,
    large: 100,
};

// use size = 'small' for question round
// size = 'large' for ending screen
const Star = (color = 'default', size = 'small') => {
    return `
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="star icon icon-tabler icon-tabler-star ${
                color === 'default' ? '' : `star--${color}`
            }"
            width="${SIZE[size.toLowerCase()]}"
            height="${SIZE[size.toLowerCase()]}"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#E5E5E5"
            fill="#E5E5E5"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
            />
        </svg>
    </div>
    `;
};

export default Star;
