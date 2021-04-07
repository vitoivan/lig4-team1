/**
 * GLOBAL CONSTANTS:
 */

const PLAYER1 = BLACK;
const PLAYER2 = RED;

/** 
 * GLOBAL VARIABLES:
 */
let currentPlayer = PLAYER1;

function getRandomPlayer() {

    const number = Math.round(Math.random() * 1) + 1;

    if (number === 1)
        return "red";

    return "black";

}; //getRandomPlayer()

function getCurrentPlayer() {

    if (currentPlayer === PLAYER1) {
        currentPlayer = PLAYER2;
    } else {
        currentPlayer = PLAYER1;
    }

    return currentPlayer;
}; //getCurrentPlayer()