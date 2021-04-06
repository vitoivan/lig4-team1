const getRandomNumber = max => Math.round(Math.random() * max);

const getRandomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;;

const getStars = max => {

    const result = []

    result.push(" 0px 0px var(--star-color0)");

    for (let i = 0; i < max; i++) {
        const randomX = getRandomNumber(1000);
        const randomY = getRandomNumber(1000);
        const randomColor = getRandomNumberBetween(0, 2);

        result.push(`${randomX}px ${randomY}px var(--star-color${randomColor})`);
    }

    return result.join(", ");
}

const renderStars = () => {

    const starsWrapperEl = document.querySelector(`div[data-id="starsWrapper"]`);

    for (let i = 1; i <= 6; i++) {

        const starEl = document.createElement("div");
        const randomShadows = getStars(getRandomNumberBetween(10, 50));
        const randomSize = getRandomNumberBetween(6, 60);
        const delay = getRandomNumber(3);
        const duration = getRandomNumberBetween(6, 24);

        starEl.classList.add("star");
        starEl.classList.add(`star__${i}`);
        starEl.style.setProperty("--d", `${delay}s`);
        starEl.style.setProperty(`--ad${i}`, `${duration}s`);
        starEl.style.setProperty("--w", `${randomSize}px`);
        starEl.style.setProperty("--h", `${randomSize}px`);
        starEl.style.setProperty("--s", randomShadows);

        starsWrapperEl.appendChild(starEl);
    }


}; // renderStars()