/**
 * GLOBAL CONSTANTS:
 */
const PLAYER1 = getRandomPlayer();
const PLAYER2 = (PLAYER1 === "red") ? "black" : "red";

/** 
 * GLOBAL VARIABLES:
 */
let currentPlayer = undefined;

// let currentPlayer;

function getRandomPlayer() {

    const number = Math.round(Math.random() * 1) + 1;

    if (number === 1)
        return "red";

    return "black";

}; //getRandomPlayer()

function getCurrentPlayer() {

    if (currentPlayer === undefined) {
        currentPlayer = PLAYER1;
        console.log('ok')
    }
    if (currentPlayer === PLAYER1) {
        console.log('ok')
        currentPlayer = PLAYER2;
    } else {
        currentPlayer = PLAYER1;
    }

    const strLogMsg = "==\nAgora é a vez da cor ";

    if (currentPlayer === PLAYER1)
        console.log(`${strLogMsg} PRETA`);
    else
        console.log(`${strLogMsg} VERMELHA`);

    return currentPlayer;
}; //getCurrentPlayer()

getCurrentPlayer()

// document.getElementById('container').addEventListener("click", currentPlayer);