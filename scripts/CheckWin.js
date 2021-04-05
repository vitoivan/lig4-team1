/*
   
    [(i-3, j-3) (i-3, j-2) (i-3, j-1) (i-3, j) (i-3, j+1) (i-3, j+2) (i-3, j+3)]
    [(i-2, j-3) (i-2, j-2) (i-2, j-1) (i-2, j) (i-2, j+1) (i-2, j+2) (i-2, j+3)]
    [(i-1, j-3) (i-1, j-2) (i-1, j-1) (i-1, j) (i-1, j+1) (i-1, j+2) (i-1, j+3)]
    [(i, j-3)    (i, j-2)   (i, j-1)   (i, j)   (i, j+1)   (i, j+2)   (i, j+3)]
    [(i+1, j-3) (i+1, j-2) (i+1, j-1) (i+1, j) (i+1, j+1) (i+1, j+2) (i+1, j+3)]
    [(i+2, j-3) (i+2, j-2) (i+2, j-1) (i+2, j) (i+2, j+1) (i+2, j+2) (i+2, j+3)]
    [(i+3, j-3) (i+3, j-2) (i+3, j-1) (i+3, j) (i+3, j+1) (i+3, j+2) (i+3, j+3)]
*/
const diagonalLeftTop = (i, j, p1, p2, voidblock) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;
    while(k <= 3){
    
        const posX = i-k;
        const posY = j-k;
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
const diagonalRightTop = (i, j, p1, p2, voidblock) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;

    while(k <= 3){ 
        const posX = i-k;
        const posY = j+k;
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
const diagonalRightBottom = (i, j, p1, p2, voidblock) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;
   
    while(k <= 3){ 
        const posX = i+k;
        const posY = j+k;
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
const diagonalLeftBottom = (i, j, p1, p2, voidblock) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;

    while(k <= 3){ 
        const posX = i+k;
        const posY = j-k;
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
const verticalTop = (i, j, p1, p2, voidblock) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;

    while(k <= 3){
        const posX = i-k;
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
const verticalBottom = (i, j, p1, p2, voidblock) => {
    let k = 0;
    let acumulator1 = 0;
    let acumulator2 = 0;

    while(k <= 3){
        const posX = i+k;
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



const checkVertical = (i,j, p1, p2, voidblock) => {
    
    const vertTop = verticalTop(i, j, p1, p2, voidblock);
    const vertBot = verticalBottom(i, j, p1, p2, voidblock);
    if(vertTop !== false){
        return vertTop;
    }
    if(vertBot !== false){
        return vertBot;
    }
    return false;
}

const checkDiagonal = (i,j, p1, p2, voidblock) => {
    const dig1 = diagonalLeftTop(i,j, p1, p2, voidblock);
    const dig2 = diagonalRightTop(i,j, p1, p2, voidblock);
    const dig3 = diagonalRightBottom(i,j, p1, p2, voidblock);
    const dig4 = diagonalLeftBottom(i,j, p1, p2, voidblock);

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
}

const checkHorizontal = (p1,p2, voidblock) => {
    let acumulator1 = 0;
    let acumulator2 = 0;
    for(let i = 0; i < map.length; i++){
        const row = map[i];
        for(let j = 0; j < row.length; j++){
            if(map[i][j] === 1){
                acumulator1++;
            }
            if(map[i][j] === 2){
                acumulator2++;
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

const checkWin = (i,j) => {
    const voidblock = ' ';
    const p1 = 'Player';
    const p2 = 'Player1';
    const horizontal = checkHorizontal(p1, p2, voidblock);
    const vertical = checkVertical(i,j, p1, p2, voidblock);
    const diagonal = checkDiagonal(i,j, p1, p2, voidblock);

    if(horizontal !== false){
        return horizontal;
    }
    if(vertical !== false){
        return vertical;
    }
    if(diagonal !== false){
        return diagonal;
    }
    return false;
}
