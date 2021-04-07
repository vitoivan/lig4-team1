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

    if(firstAudioIsPlaying === false){
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
    },555);
}

const changeNeonColors = (random ='no') => {
    const allBlocks = document.querySelectorAll('.block , img.logo, header.displayFlex>div');
    if(random === 'random'){
        allBlocks.forEach(changeRandomNeon)
    }else{
        const number = getRandomNumber(3);
        allBlocks.forEach( block => {
            changeNeon(block, number);
        })
   
    }
}
const removeAllNeonClasses = (block) => {
    
    const blockClass = Array.from(block.classList);
    if(blockClass.includes('purple-neon')){
        block.classList.remove('purple-neon');
        return 2;
    }
    if(blockClass.includes('yellow-neon')){
        block.classList.remove('yellow-neon');
        return 0;
    }
    if(blockClass.includes('white-neon')){
        block.classList.remove('white-neon');
        return 3;
    }
    if(blockClass.includes('red-neon')){
        block.classList.remove('red-neon');
        return 1;
    }
   
  
    

    
}
const returnNewNeonClass = (block,number=null) => {
    switch(number){
        case 0:
            block.classList.add('yellow-neon');
            break;
        case 1:
            block.classList.add('red-neon');
            break;
        case 2:
            block.classList.add('purple-neon');
            break;
        case 3:
            block.classList.add('white-neon');
            break;
    }
}
const changeRandomNeon = block => {
    const number = getRandomNumber(3)
    removeAllNeonClasses(block);
    returnNewNeonClass(block,number);
}
const changeNeon = (block,number) => {
    const notPickThis = removeAllNeonClasses(block);
    if(number !== notPickThis){
        returnNewNeonClass(block,number);
    }else{
        if(number + 1 < 4){
            returnNewNeonClass(block,number + 1 );
        }else{
            returnNewNeonClass(block,number - 1 );
        }
       
    }
    
}
const timerToChangeNeon = (number) => {
    if(number === 0){
        let time = 0;

        let interval = setInterval(() => {
            if(time >= 4){    
                const interval2 = setInterval(() => {
                    if(time >= 15){
                        const interval3 = setInterval( () => {
                            changeNeonColors();
                            time++;
                        },650)
                        clearInterval(interval2);
                    }
                    changeNeonColors();
                    time += 0.2;
                }, 200);
                clearInterval(interval);
            }
            time++;
        }, 1000);
    }   

    if(number === 1){

    }
}

