/**
 * GLOBAL CONSTANTS:
 */

function getRandomPlayer() {

    const number = Math.round(Math.random() * 1) + 1;

    if (number === 1)
        return PURPLE;

    return GREEN;

}; //getRandomPlayer()

function getCurrentPlayer() {

    if (currentPlayer === PLAYER1) {
        currentPlayer = PLAYER2;
    } else {
        currentPlayer = PLAYER1;
    }

    return currentPlayer;
}; //getCurrentPlayer()