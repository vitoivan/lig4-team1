// const getRandomNumber = max => Math.round(Math.random() * max);

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

    const isMobilie = (window.outerWidth < 800);

    for (let i = 1; i <= 6; i++) {

        const starEl = document.createElement("div");
        const randomShadows = (isMobilie) ? getStars(getRandomNumberBetween(25, 75)) : getStars(getRandomNumberBetween(50, 150));
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


let firstAudioIsPlaying = false;
let SecondAudioIsPlaying = false;

const whenFirstAudioStop = () => {
    firstAudioIsPlaying = false;
}
const whenSecondAudioStop = () => {
    SecondAudioIsPlaying = false;
}

const fallingBall = (piece) => {

    let audio = undefined;

    if (firstAudioIsPlaying === false) {
        audio = document.getElementById('audioFallingBall');
        firstAudioIsPlaying = true;
    } else {
        audio = document.getElementById('audioFallingBall2');

        SecondAudioIsPlaying = true;
    }

    const vol = 1;
    piece.classList.add('falling');
    const timeOut = setTimeout(() => {

        audio.volume = vol;
        audio.play();
        piece.classList.remove('falling');
        piece.style.animation = 'bouncing 1s cubic-bezier(0, 0.74, 1, 0.24)';

        clearTimeout(timeOut);
    }, 555);
}

const changeColorWithTimer = (speed, repeatLimit, random = 'no', timer = -1, timerLimit = 0) => {
    let seconds;
    let counter = 0;
    if (timer !== -1) {
        seconds = setInterval(() => {
            timer++;
        }, 1000);
    }

    let interval = setInterval(() => {
        if (counter >= repeatLimit || timer >= timerLimit) {
            clearInterval(seconds);
            clearInterval(interval);
        }
        applyNormalOrRandomNeon(random);
        counter++;
    }, speed);

}

const timerToChangeNeon = (number) => {

    if (number === 0) {
        setTimeout(() => {
            changeColorWithTimer(300, 5000, 'no', 0, 5);
        }, 1)
        setTimeout(() => {
            changeColorWithTimer(300, 5, 'random', 0, 11);
        }, 5000)

        setTimeout(() => {
            changeColorWithTimer(100, 5000, 'random', 0, 9);
        }, 7000)
        setTimeout(() => {
            changeColorWithTimer(650, 90000, 'no', 0, 360);
        }, 15200)


    }

    if (number === 1) {
        //changeColorWithTimer (speed, repeatLimit, random='no', timer=-1, timerLimit=0)
        setTimeout(() => {
            allNeonBlack()
            changeColorWithTimer(400, 300, 'no', 0, 8);
        }, 1200);
        //double
        setTimeout(() => {
            allNeonBlack()
        }, 4700);

        setTimeout(() => {
            allNeonBlack()
        }, 7000);
        setTimeout(() => {
            changeColorWithTimer(50, 5000, 'random', 0, 3);
        }, 8100);

        setTimeout(() => {
            changeColorWithTimer(50, 5000, 'random', 0, 2);
        }, 12000);
        setTimeout(() => {
            changeColorWithTimer(1, 1, 'no');
        }, 15800);
        setTimeout(() => {
            changeColorWithTimer(1, 1, 'no');
        }, 17500);
        setTimeout(() => {
            changeColorWithTimer(50, 50000, 'no', 0, 3);
        }, 19600);

        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 24200);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 27200);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 30400);
        setTimeout(() => {
            changeColorWithTimer(50, 5000, 'no', 0, 2);
        }, 33600);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 37000);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 40000);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 43500);
        setTimeout(() => {
            changeColorWithTimer(400, 50000, 'no', 0, 32);
        }, 62600);
        setTimeout(() => {
            changeColorWithTimer(50, 5000, 'no', 0, 2);
        }, 95000);

        setTimeout(() => {
            changeColorWithTimer(100, 3, 'no');
        }, 98000);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 98500);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 102000);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 105200);
        setTimeout(() => {
            changeColorWithTimer(50, 50000, 'no', 0, 9);
        }, 125000);
        setTimeout(() => {
            allNeonBlack();
            changeColorWithTimer(150, 5, 'no');
        }, 137500);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 140500);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 144000);
        setTimeout(() => {
            changeColorWithTimer(50, 5000, 'no', 0, 2);
        }, 147000);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 150500);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 153500);
        setTimeout(() => {
            changeColorWithTimer(150, 5, 'no');
        }, 156500);
        setTimeout(() => {
            changeColorWithTimer(50, 5000, 'random', 0, 3);
        }, 160000);
        setTimeout(() => {
            changeColorWithTimer(50, 5000, 'no', 0, 3)
        }, 163300);



    }
}