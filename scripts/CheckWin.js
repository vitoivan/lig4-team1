/*
    [(i-3, j-3) (i-3, j-2) (i-3, j-1) (i-3, j) (i-3, j+1) (i-3, j+2) (i-3, j+3)]
    [(i-2, j-3) (i-2, j-2) (i-2, j-1) (i-2, j) (i-2, j+1) (i-2, j+2) (i-2, j+3)]
    [(i-1, j-3) (i-1, j-2) (i-1, j-1) (i-1, j) (i-1, j+1) (i-1, j+2) (i-1, j+3)]
    [( i, j-3 ) ( i, j-2 ) ( i, j-1 ) ( i, j ) ( i, j+1 ) ( i, j+2 ) ( i, j+3 )]
    [(i+1, j-3) (i+1, j-2) (i+1, j-1) (i+1, j) (i+1, j+1) (i+1, j+2) (i+1, j+3)]
    [(i+2, j-3) (i+2, j-2) (i+2, j-1) (i+2, j) (i+2, j+1) (i+2, j+2) (i+2, j+3)]
    [(i+3, j-3) (i+3, j-2) (i+3, j-1) (i+3, j) (i+3, j+1) (i+3, j+2) (i+3, j+3)]
*/

const diagonalSide = (i, j, p1, p2, voidblock, dir) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;
    while(k <= 3){
       
        const [posX, posY] = direction(i, j ,k, dir);

        if(posX >= 0 && posX < map.length && posY >= 0 && posY < map[i].length){

            if(map[posX][posY] === 1){
                acumulator1++;
            }
            if(map[posX][posY] === 2){
                acumulator2++;
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
const verticalSide = (i, j, p1, p2, voidblock,dir) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;

    while(k <= 3){
        const posX = direction(i, j, k, dir);
        if(posX >= 0 && posX < map.length){
            if(map[posX][j] === 1){
                acumulator1++;
            }
            if(map[posX][j] === 2){
                acumulator2++;
            }
            if(map[posX][j] === voidblock){
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
        return i - k;
    }
    if(dir === 'vertical-bottom'){
        return i + k;
    }
}


const checkVertical = (i,j, p1, p2, voidblock) => {
    
    const vertTop = verticalSide(i, j, p1, p2, voidblock, 'vertical-top');
    const vertBot = verticalSide(i, j, p1, p2, voidblock, 'vertical-bottom');
    if(vertTop !== false){
        return vertTop;
    }
    if(vertBot !== false){
        return vertBot;
    }
    return false;
}

const checkDiagonal = (i,j, p1, p2, voidblock) => {
    const dig1 = diagonalSide(i,j, p1, p2, voidblock,'diag-left-top');
    const dig2 = diagonalSide(i,j, p1, p2, voidblock,'diag-right-top');
    const dig3 = diagonalSide(i,j, p1, p2, voidblock,'diag-right-bottom');
    const dig4 = diagonalSide(i,j, p1, p2, voidblock, 'diag-left-bottom');

    if(dig1 !== false){
        return dig1;
    }
    if(dig2 !== false){
        return dig2;
    }
    if(dig3 !== false){
        return dig3;
    }
    if(dig4 !== false){
        return dig4;
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
    const rowLength = map[0].length;
    const colLength = map.length;
    const numberOfElements = rowLength * colLength;
    let counter = 0;

    for(let i = 0; i < colLength; i++){
        for(let j = 0; j < rowLength; j++){
            if(map[i][j] !== 0){
                counter++;
            }
            else{
                break;
            }
        }
    }
    if(counter === numberOfElements){
        return 'Draw!';
    }else{
        return false;
    }
}

const checkWin = (i,j) => {
    const voidblock = 0;
    const p1 = 'black won the game';
    const p2 = 'red won the game';
    const horizontal = checkHorizontal(p1, p2, voidblock);
    const vertical = checkVertical(i,j, p1, p2, voidblock);
    const diagonal = checkDiagonal(i,j, p1, p2, voidblock);
    const draw = isDraw();

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
