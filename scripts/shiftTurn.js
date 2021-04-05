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

function currentPlayer() {
    if (currentPlayer === undefined) {
        currentPlayer = BLACK_PLAYER;
    }
    if (currentPlayer === BLACK_PLAYER) {
        currentPlayer = RED_PLAYER;
    } else {
        currentPlayer = BLACK_PLAYER;
    }

    return currentPlayer;
}; //currentPlayer()

currentPlayer()

// document.getElementById('container').addEventListener("click", currentPlayer);