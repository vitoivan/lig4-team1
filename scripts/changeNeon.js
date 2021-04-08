const getRandomNumber = max => Math.round(Math.random() * max);

const applyNormalOrRandomNeon = (random = 'no') => {
    const allBlocks = document.querySelectorAll('.block , img.logo, header.displayFlex>div');
    if (random === 'random') {
        allBlocks.forEach(setRandomNeon)
    } else {
        const number = getRandomNumber(3);
        allBlocks.forEach(block => {
            setNormalNeon(block, number);
        })

    }
}

const removeAllNeonClasses = (block) => {

    const blockClass = Array.from(block.classList);
    if (blockClass.includes('purple-neon')) {
        block.classList.remove('purple-neon');
        return 2;
    }
    if (blockClass.includes('yellow-neon')) {
        block.classList.remove('yellow-neon');
        return 0;
    }
    if (blockClass.includes('white-neon')) {
        block.classList.remove('white-neon');
        return 3;
    }
    if (blockClass.includes('red-neon')) {
        block.classList.remove('red-neon');
        return 1;
    }
    if (blockClass.includes('black-neon')) {
        block.classList.remove('black-neon');
        return null;
    }





}

const returnNewNeonClass = (block, number = null) => {
    switch (number) {
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

const setRandomNeon = block => {
    const number = getRandomNumber(3)
    removeAllNeonClasses(block);
    returnNewNeonClass(block, number);
}

const setNormalNeon = (block, number) => {
    const notPickThis = removeAllNeonClasses(block);
    if (number !== notPickThis) {
        returnNewNeonClass(block, number);
    } else {
        if (number + 1 < 4) {
            returnNewNeonClass(block, number + 1);
        } else {
            returnNewNeonClass(block, number - 1);
        }

    }

}

const allNeonBlack = () => {
    const blocks = Array.from(document.querySelectorAll('.block'));

    blocks.forEach(block => {
        removeAllNeonClasses(block);
        block.classList.add('black-neon');
    });
}