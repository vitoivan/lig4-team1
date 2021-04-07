/*
    [(i-3, j-3) (i-3, j-2) (i-3, j-1) (i-3, j) (i-3, j+1) (i-3, j+2) (i-3, j+3)]
    [(i-2, j-3) (i-2, j-2) (i-2, j-1) (i-2, j) (i-2, j+1) (i-2, j+2) (i-2, j+3)]
    [(i-1, j-3) (i-1, j-2) (i-1, j-1) (i-1, j) (i-1, j+1) (i-1, j+2) (i-1, j+3)]
    [( i, j-3 ) ( i, j-2 ) ( i, j-1 ) ( i, j ) ( i, j+1 ) ( i, j+2 ) ( i, j+3 )]
    [(i+1, j-3) (i+1, j-2) (i+1, j-1) (i+1, j) (i+1, j+1) (i+1, j+2) (i+1, j+3)]
    [(i+2, j-3) (i+2, j-2) (i+2, j-1) (i+2, j) (i+2, j+1) (i+2, j+2) (i+2, j+3)]
    [(i+3, j-3) (i+3, j-2) (i+3, j-1) (i+3, j) (i+3, j+1) (i+3, j+2) (i+3, j+3)]
*/
const ValiablePosition = (Ipos, Jpos) => {
    if (Ipos >= 0 && Jpos >= 0 && Ipos < map.length && Jpos < map[0].length) {
        return true;
    }
    return false;
}
const getNextPosition = (i, j, k, dir) => {

    if (dir === 'diag-left-top') {
        return [i - k, j - k];
    }
    if (dir === 'diag-right-top') {
        return [i - k, j + k];
    }
    if (dir === 'diag-right-bottom') {
        return [i + k, j + k];
    }
    if (dir === 'diag-left-bottom') {
        return [i + k, j - k];
    }
    if (dir === 'vertical-top') {
        return [i - k, j];
    }
    if (dir === 'vertical-bottom') {
        return [i + k, j];
    }
}
const checkOneLine = (i, j, p1, p2, voidblock, dir) => {
    let k = 0;
    let counter1 = 0;
    let counter2 = 0;
    let Ipos = undefined;
    let Jpos = undefined;

    do {
        [Ipos, Jpos] = getNextPosition(i, j, k, dir);
        // console.log(ValiablePosition(Ipos,Jpos));
        if (ValiablePosition(Ipos, Jpos)) {
            if (map[Ipos][Jpos] === 1) {
                counter1++;
                counter2 = 0;
            }
            if (map[Ipos][Jpos] === 2) {
                counter2++;
                counter1 = 0;
            }
            if (map[Ipos][Jpos] === voidblock) {
                counter1 = 0;
                counter2 = 0;
            }
            if (counter1 === 4) {
                return p1;
            }
            if (counter2 === 4) {
                return p2;
            }

        }
        k++;
    } while (Ipos >= 0 && Jpos < map[i].length && Jpos >= 0 && Ipos < map.length)
    return false;
}

const checkDiagonal = (p1, p2, voidblock) => {

    let j = 0;
    const lastPos = map[0].length - 1;
    for (let i = 0; i < map.length; i++) {

        //left Side
        const ResultTopSideLeft = checkOneLine(i, 0, p1, p2, voidblock, 'diag-right-top');
        if (ResultTopSideLeft !== false) {
            return ResultTopSideLeft;
        }

        const ResultBotSideLeft = checkOneLine(i, 0, p1, p2, voidblock, 'diag-right-bottom');
        if (ResultBotSideLeft !== false) {
            return ResultBotSideLeft;
        }
        //Right Side
        const ResultTopSideRight = checkOneLine(i, lastPos, p1, p2, voidblock, 'diag-left-top');
        if (ResultTopSideRight !== false) {
            return ResultTopSideRight;
        }

        const ResultBotSideRight = checkOneLine(i, lastPos, p1, p2, voidblock, 'diag-left-bottom');
        if (ResultBotSideRight !== false) {
            return ResultBotSideRight;
        }
    }

    return false;
}

const checkHorizontal = (p1, p2, voidblock) => {
    let acumulator1 = 0;
    let acumulator2 = 0;
    for (let i = 0; i < map.length; i++) {
        const row = map[i];
        for (let j = 0; j < row.length; j++) {

            if (map[i][j] === 1) {
                acumulator1++;
                acumulator2 = 0;
            }
            if (map[i][j] === 2) {
                acumulator2++;
                acumulator1 = 0;
            }
            if (map[i][j] === voidblock) {
                acumulator1 = 0;
                acumulator2 = 0;
            }

            if (acumulator1 === 4) {
                return p1;
            }
            if (acumulator2 === 4) {
                return p2;
            }
        }
        acumulator1 = 0;
        acumulator2 = 0;
    }
    return false;
}
const isDraw = () => {

    for (let i = 0; i < map.length; i++) {
        const row = map[i]
        for (let j = 0; j < row.length; j++) {
            if (map[i][j] === 0) {
                return false;
            }
        }
    }
    return DRAW;
    /*
        
        [1,2,1,2,1,2,1],
        [1,2,1,2,1,2,1],
        [2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2],
        [1,2,1,2,1,2,1],
        [1,2,1,2,1,2,1],
        
    */
}
const checkVertical = (j, p1, p2, voidblock) => {
    const lastPos = map.length - 1;
    const result = checkOneLine(lastPos, j, p1, p2, voidblock, 'vertical-top');
    if (result !== false) {
        return result;
    }
    return false;
}
const checkWin = (i, j) => {
        const voidblock = 0;
        const horizontal = checkHorizontal(BLACK, RED, voidblock);
        const vertical = checkVertical(j, BLACK, RED, voidblock);
        const diagonal = checkDiagonal(BLACK, RED, voidblock);
        const draw = isDraw(map);

        if (horizontal !== false) {
            return horizontal;
        }
        if (vertical !== false) {
            return vertical;
        }

        if (diagonal !== false) {

            return diagonal;
        }
        if (draw !== false) {
            return draw;
        }

        return false;
    }
    // Check win retorna ou falso, ou string