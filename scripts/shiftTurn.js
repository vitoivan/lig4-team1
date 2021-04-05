/**
 * GLOBAL CONSTANTS:
 */
const BLACK_PLAYER = getRandomPlayer();
const RED_PLAYER = (BLACK_PLAYER === 1) ? 2 : 1;

/** 
 * GLOBAL VARIABLES:
 */
let currentPlayer;

// let currentPlayer;

function getRandomPlayer() {

    return Math.round(Math.random() * 1) + 1;

}; //getRandomPlayer()

function getCurrentPlayer() {

    if (currentPlayer === undefined) {
        currentPlayer = BLACK_PLAYER;
    }
    if (currentPlayer === BLACK_PLAYER) {
        currentPlayer = RED_PLAYER;
    } else {
        currentPlayer = BLACK_PLAYER;
    }

    const strLogMsg = "==\nAgora é a vez da cor ";

    if (currentPlayer === BLACK_PLAYER)
        console.log(`${strLogMsg} PRETA`);
    else
        console.log(`${strLogMsg} VERMELHA`);

    return currentPlayer;
}; //getCurrentPlayer()

getCurrentPlayer()

// document.getElementById('container').addEventListener("click", currentPlayer);