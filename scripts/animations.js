const getRandomNumber = max => Math.round(Math.random() * max);

const getRandomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;;

const getStars = max => {

    const result = []

    result.push(" 0px 0px var(--star-color0)");

    for (let i = 0; i < max; i++) {
        const randomX = getRandomNumber(window.outerWidth);
        const randomY = getRandomNumber(window.outerWidth);
        const randomColor = getRandomNumberBetween(0, 2);

        result.push(`${randomX}px ${randomY}px 4px var(--star-color${randomColor})`);
    }

    return result.join(", ");
}

const renderStars = () => {

    const starsWrapperEl = document.querySelector(`div[data-id="starsWrapper"]`);

    for (let i = 1; i <= 6; i++) {

        const starEl = document.createElement("div");
        const randomShadows = getStars(getRandomNumberBetween(50, 150));
        const randomSize = getRandomNumberBetween(2, 4);
        const delay = getRandomNumber(3);
        const duration = getRandomNumberBetween(10, 15);

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

const changeStarPattern = () => {

    setTimeout(() => {

            const starsWrapperEl = document.querySelector(`div[data-id="starsWrapper"]`);

            renderStars();

            setTimeout(() => removeChildNodes(starsWrapperEl, 6), 20000); // 20s

        }, 100000) // 100s

}; // changeStarPattern()

const fallingBall =  (piece) => {
    const audio = document.getElementById('audioFallingBall');
    const vol = 1;
    piece.classList.add('falling');
    const timeOut = setTimeout( () => {
        audio.volume = vol;
        audio.play();
        piece.classList.remove('falling');
        piece.style.animation = 'bouncing 1s cubic-bezier(0.18, 0.18, 0.3, 0.35)';
        clearTimeout(timeOut);
    },530);
    let times = 11;
    // const interval = setInterval( () => {
    //     audio.play();
    //     times--;
    //     console.log(times)
    //     if(times === 0){
    //         clearInterval(interval);
    //     }
    // }, 54);
   
}