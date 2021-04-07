const updateScore = (player) => {

    const playerScoreEl = document.querySelector(`h3[data-id="${player}"]`);

    if (player === GREEN)
        playerScoreEl.innerText = score.green;
    else
        playerScoreEl.innerText = score.purple;

}; // updateScore()

const resetTable = () => {

    for (let row = 0; row < 7; row++) {
        for (let column = 0; column < 6; column++) {

            const element = document.getElementById(`block-${row}-${column}`);

            if (element.lastChild) {
                map[row][column] = 0;
                removeChildNodes(element);
            }
        }
    }
}; // resetTable()


// Function to create pieces when individual block is clicked
const createPieces = () => {

    const columnsList = document.getElementsByClassName('row')
    const currentPLayerEl = document.querySelector(`div[data-id="currentPlayer"]`);
    const CLASS_PLAYER_GREEN = "player--green";
    const CLASS_PLAYER_PURPLE = "player--purple";
    const DELAY = 3000;

    if (PLAYER1 === PURPLE)
        currentPLayerEl.classList.add(CLASS_PLAYER_GREEN);
    else
        currentPLayerEl.classList.add(CLASS_PLAYER_PURPLE);

    for (let i = 0; i < columnsList.length; i++) {

        const column = columnsList[i];

        column.addEventListener('click', function() {

            let arrayOfBlocks = column.childNodes

            let arrayOfEmptyBlocks = []

            for (let i = 0; i < arrayOfBlocks.length; i++) {
                if (arrayOfBlocks[i].childNodes.length === 0) {
                    arrayOfEmptyBlocks.push(arrayOfBlocks[i])
                }
            }
            const pieceEl = document.createElement('div')

            let lastBlock = arrayOfEmptyBlocks[arrayOfEmptyBlocks.length - 1]

            if (lastBlock) {

                let blockXPosition = parseInt(lastBlock.id.split('-')[1])
                let blockYPosition = parseInt(lastBlock.id.split('-')[2])

                if (currentPlayer === PLAYER1) {
                    map[blockXPosition][blockYPosition] = 1
                }
                if (currentPlayer === PLAYER2) {
                    map[blockXPosition][blockYPosition] = 2
                }

                pieceEl.classList.add("player");
                pieceEl.classList.add("player__inGame");
                pieceEl.classList.add('falling');

                if (currentPlayer === GREEN) {
                    pieceEl.classList.add(CLASS_PLAYER_GREEN);

                    currentPLayerEl.classList.add(CLASS_PLAYER_PURPLE); // this player turn.
                    currentPLayerEl.classList.remove(CLASS_PLAYER_GREEN);

                } else {

                    pieceEl.classList.add(CLASS_PLAYER_PURPLE);

                    currentPLayerEl.classList.add(CLASS_PLAYER_GREEN); // this player turn.
                    currentPLayerEl.classList.remove(CLASS_PLAYER_PURPLE);

                }

                fallingBall(pieceEl)

                lastBlock.appendChild(pieceEl);

                getCurrentPlayer();

                hasWinner = checkWin(blockXPosition, blockYPosition);

                if (hasWinner) {
                    console.log(hasWinner);

                    if (hasWinner === GREEN) {
                        score.green += 1;
                        updateScore(GREEN);
                        setTimeout(resetTable, DELAY);
                    } else if (hasWinner === PURPLE) {
                        score.purple += 1;
                        updateScore(PURPLE);
                        setTimeout(resetTable, DELAY);
                    }

                    hasWinner = undefined; // reset the variable;
                }
                console.log(map);
            }
        });
    }
};