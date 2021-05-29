/*----------------------------------------------------------------------------------
    [(i-3, j-3) (i-3, j-2) (i-3, j-1) (i-3, j) (i-3, j+1) (i-3, j+2) (i-3, j+3)]
    [(i-2, j-3) (i-2, j-2) (i-2, j-1) (i-2, j) (i-2, j+1) (i-2, j+2) (i-2, j+3)]
    [(i-1, j-3) (i-1, j-2) (i-1, j-1) (i-1, j) (i-1, j+1) (i-1, j+2) (i-1, j+3)]
    [( i, j-3 ) ( i, j-2 ) ( i, j-1 ) ( i, j ) ( i, j+1 ) ( i, j+2 ) ( i, j+3 )]
    [(i+1, j-3) (i+1, j-2) (i+1, j-1) (i+1, j) (i+1, j+1) (i+1, j+2) (i+1, j+3)]
    [(i+2, j-3) (i+2, j-2) (i+2, j-1) (i+2, j) (i+2, j+1) (i+2, j+2) (i+2, j+3)]
    [(i+3, j-3) (i+3, j-2) (i+3, j-1) (i+3, j) (i+3, j+1) (i+3, j+2) (i+3, j+3)]
-------------------------------------------------------------------------------------*/
const ValiablePosition = (Ipos, Jpos) => {
    if (Ipos >= 0 && Jpos >= 0 && Ipos < map.length && Jpos < map[0].length) {
        return true;
    }
    return false;
}

const getNextPosition = (row, col, konstant, dir) => {

    if (dir === 'diag-left-top') {
        return [row - konstant, col - konstant];
    }
    if (dir === 'diag-right-top') {
        return [row - konstant, col + konstant];
    }
    if (dir === 'diag-right-bottom') {
        return [row + konstant, col + konstant];
    }
    if (dir === 'diag-left-bottom') {
        return [row + konstant, col - konstant];
    }
    if (dir === 'vertical-top') {
        return [row - konstant, col];
    }
    if (dir === 'vertical-bottom') {
        return [row + konstant, col];
    }
}
const checkOneLine = (row, col, player1, player2, voidblock, direction) => {
    let konstant = 0;
    let counter1 = 0;
    let counter2 = 0;
    let rowPos = undefined;
    let colPos = undefined;

    do {
        [rowPos, colPos] = getNextPosition(row, col, konstant, direction);
        if (ValiablePosition(rowPos, colPos)) {
            const currentCell = map[rowPos][colPos]
            if (currentCell === 1) {
                counter1++;
                counter2 = 0;
            }
            if (currentCell === 2) {
                counter2++;
                counter1 = 0;
            }
            if (currentCell === voidblock) {
                counter1 = 0;
                counter2 = 0;
            }
            if (counter1 === 4) {
                return player1;
            }
            if (counter2 === 4) {
                return player2;
            }
        }else{
            return false;
        }
        konstant++;
    } while (true)
}
const checkDiagonal = (player1, player2, voidblock) => {

    const lastPos = map[0].length - 1;
    for (let row = 0; row < map.length; row++) {

        //left Side
        const ResultTopSideLeft = checkOneLine(row, 0, player1, player2, voidblock, 'diag-right-top');
        if (ResultTopSideLeft !== false) {
            return ResultTopSideLeft;
        }

        const ResultBotSideLeft = checkOneLine(row, 0, player1, player2, voidblock, 'diag-right-bottom');
        if (ResultBotSideLeft !== false) {
            return ResultBotSideLeft;
        }
        //Right Side
        const ResultTopSideRight = checkOneLine(row, lastPos, player1, player2, voidblock, 'diag-left-top');
        if (ResultTopSideRight !== false) {
            return ResultTopSideRight;
        }

        const ResultBotSideRight = checkOneLine(row, lastPos, player1, player2, voidblock, 'diag-left-bottom');
        if (ResultBotSideRight !== false) {
            return ResultBotSideRight;
        }
    }

    return false;
}

const checkHorizontal = (player1, player2, voidblock) => {
    let acumulator1 = 0;
    let acumulator2 = 0;
    for (let row = 0; row < map.length; row++) {
        const currentRow = map[row];
        for (let col = 0; col < currentRow.length; col++) {
            const currentCell = map[row][col]

            if (currentCell === 1) {
                acumulator1++;
                acumulator2 = 0;
            }
            if (currentCell === 2) {
                acumulator2++;
                acumulator1 = 0;
            }
            if (currentCell === voidblock) {
                acumulator1 = 0;
                acumulator2 = 0;
            }

            if (acumulator1 === 4) {
                return player1;
            }
            if (acumulator2 === 4) {
                return player2;
            }
        }
        acumulator1 = 0;
        acumulator2 = 0;
    }

    return false;
}

const isDraw = () => {

    for (let row = 0; row < map.length; row++) {
        const currentRow = map[row]
        for (let col = 0; col < currentRow.length; col++) {
            if (map[row][col] === 0) {
                return false;
            }
        }
    }
    return DRAW;

}

const checkVertical = (col, player1, player2, voidblock) => {
    const lastPos = map.length - 1;
    const result = checkOneLine(lastPos, col, player1, player2, voidblock, 'vertical-top');
    if (result !== false) {
        return result;
    }
    return false;
}

const checkWin = (row, col) => {
    const voidblock = 0;
    const horizontal = checkHorizontal(GREEN, PURPLE, voidblock);
    const vertical = checkVertical(col, GREEN, PURPLE, voidblock);
    const diagonal = checkDiagonal(GREEN, PURPLE, voidblock);
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