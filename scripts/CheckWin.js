/*
    [(i-3, j-3) (i-3, j-2) (i-3, j-1) (i-3, j) (i-3, j+1) (i-3, j+2) (i-3, j+3)]
    [(i-2, j-3) (i-2, j-2) (i-2, j-1) (i-2, j) (i-2, j+1) (i-2, j+2) (i-2, j+3)]
    [(i-1, j-3) (i-1, j-2) (i-1, j-1) (i-1, j) (i-1, j+1) (i-1, j+2) (i-1, j+3)]
    [( i, j-3 ) ( i, j-2 ) ( i, j-1 ) ( i, j ) ( i, j+1 ) ( i, j+2 ) ( i, j+3 )]
    [(i+1, j-3) (i+1, j-2) (i+1, j-1) (i+1, j) (i+1, j+1) (i+1, j+2) (i+1, j+3)]
    [(i+2, j-3) (i+2, j-2) (i+2, j-1) (i+2, j) (i+2, j+1) (i+2, j+2) (i+2, j+3)]
    [(i+3, j-3) (i+3, j-2) (i+3, j-1) (i+3, j) (i+3, j+1) (i+3, j+2) (i+3, j+3)]
*/
const Side = (i, j, p1, p2, voidblock, dir) => {

    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;
    while(k <= 3){
       
        const [posX, posY] = direction(i, j ,k, dir);
        
        if(posX >= 0 && posX < map.length && posY >= 0 && posY < map[i].length){

            if(map[posX][posY] === 1){
                acumulator1++;
                acumulator2 = 0;
            }
            if(map[posX][posY] === 2){
                acumulator2++;
                acumulator1 = 0;
            }
            if(map[posX][posY] === voidblock){
                acumulator1 = 0;
                acumulator2 = 0;
            }
            if(acumulator1 === 4){
                return p1;
            }
            if(acumulator2 === 4){
                return p2;
            }
        }
        k++;
    }
    return false;
}

const direction = (i, j, k, dir) => {

    if(dir === 'diag-left-top'){
        return [i-k, j-k];
    }
    if(dir === 'diag-right-top'){
        return [i-k, j+k];
    }
    if(dir === 'diag-right-bottom'){
        return [i+k, j+k];
    }
    if(dir === 'diag-left-bottom'){
        return [i+k, j-k];
    }
    if(dir === 'vertical-top'){
        return [i - k, j];
    }
    if(dir === 'vertical-bottom'){
        return [i + k, j];
    }
}

const checkVertical = (i,j, p1, p2, voidblock) => {
    const vertTop = Side(i, j, p1, p2, voidblock, 'vertical-top');
    const vertBot = Side(i, j, p1, p2, voidblock, 'vertical-bottom');
    if(vertTop !== false){
        return vertTop;
    }
    if(vertBot !== false){
        return vertBot;
    }
    return false;
}

const checkDiagonal = (i,j, p1, p2, voidblock) => {
    const diag1 = Side(i,j, p1, p2, voidblock,'diag-left-top');
    const diag2 = Side(i,j, p1, p2, voidblock,'diag-right-top');
    const diag3 = Side(i,j, p1, p2, voidblock,'diag-right-bottom');
    const diag4 = Side(i,j, p1, p2, voidblock, 'diag-left-bottom');

    if(diag1 !== false){
        return diag1;
    }
    if(diag2 !== false){
        return diag2;
    }
    if(diag3 !== false){
        return diag3;
    }
    if(diag4 !== false){
        return diag4;
    }
    return false;
}

const checkHorizontal = (p1,p2, voidblock) => {
    let acumulator1 = 0;
    let acumulator2 = 0;
    for(let i = 0; i < map.length; i++){
        const row = map[i];
        for(let j = 0; j < row.length; j++){

            if(map[i][j] === 1){
                acumulator1++;
                acumulator2 = 0;
            }
            if(map[i][j] === 2){
                acumulator2++;
                acumulator1 = 0;
            }
            if(map[i][j] === voidblock){
                acumulator1 = 0;
                acumulator2 = 0;
            }

            if(acumulator1 === 4){
                return p1;
            }
            if(acumulator2 === 4){
                return p2;
            }
        }
        acumulator1 = 0;
        acumulator2 = 0;
    }
    return false;
}

const isDraw = () => {
    let counter = 0;
    for(let i = 0; i < map.length; i++){
        const row = map[i]
        for(let j = 0; j < row.length; j++){
            if(map[i][j] === 0){
                return false;
            }
        }
    }
    return 'Draw!';
    /*
        
        [1,2,1,2,1,2,1],
        [1,2,1,2,1,2,1],
        [2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2],
        [1,2,1,2,1,2,1],
        [1,2,1,2,1,2,1],
        
    */
}

const checkWin = (i, j) => {
    const voidblock = 0;
    const p1 = 'P1 Won the game';
    const p2 = 'P2 Won the game';
    const horizontal = checkHorizontal(p1, p2, voidblock);
    const vertical = checkVertical(i,j, p1, p2, voidblock);
    const diagonal = checkDiagonal(i,j, p1, p2, voidblock);
    const draw = isDraw(map);

    if(horizontal !== false){
        return horizontal;
    }
    if(vertical !== false){
        return vertical;
    }
    if(diagonal !== false){
        return diagonal;
    }
    if(draw !== false){   
        return draw;
    }

    return false;
}

// Check win retorna ou falso, ou string