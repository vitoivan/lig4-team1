const updateScore = (player) => {

    const playerScoreEl = document.querySelector(`h3[data-id="${player}"]`);

    if (player === GREEN)
        playerScoreEl.innerText = score.green;
    else
        playerScoreEl.innerText = score.purple;

}; // updateScore(player)

const resetGame = () => {
    debugger
    const resultScreenEl = document.querySelector(`div[data-id="resultScreen"]`);

    score.green = 0;
    score.purple = 0;

    updateScore(GREEN);
    updateScore(PURPLE);

    for (let row = 0; row < 7; row++) {
        for (let column = 0; column < 6; column++) {

            const element = document.getElementById(`block-${row}-${column}`);

            if (element.lastChild) {
                map[row][column] = 0;
                removeChildNodes(element);
            }
        }
    }

    resultScreenEl.classList.add(DISPLAY_NONE_CLASS);
    resultScreenEl.classList.add(HIDDEN_CLASS);

}; // resetGame()

const renderResultScreen = () => {
    const resultScreenEl = document.querySelector(`div[data-id="resultScreen"]`);
    const h2El = document.createElement("h2");
    const h3El = document.createElement("h3");
    const btnRestart = document.createElement("button");

    if (hasWinner === GREEN)
        h2El.innerText = "Parabéns, VERDE!!";
    else
        h2El.innerText = "Parabéns, ROXO!!";

    h3El.innerText = "Você venceu o jogo!!"
    btnRestart.dataset.id = "btnRestart";
    btnRestart.classList.add("btn");
    btnRestart.classList.add("ingame-button");
    btnRestart.innerText = "reiniciar";

    removeChildNodes(resultScreenEl);

    resultScreenEl.appendChild(h2El);
    resultScreenEl.appendChild(h3El);
    resultScreenEl.appendChild(btnRestart);

    btnRestart.onclick = resetGame;

    resultScreenEl.classList.remove(DISPLAY_NONE_CLASS);
    resultScreenEl.classList.remove(HIDDEN_CLASS);

}; // renderResultScreen()

const renderPopUp = () => {
    const resultScreenEl = document.querySelector(`div[data-id="popUpScreen"]`);
    const h2El = document.createElement("h2");
    const h3El = document.createElement("h3");

    h2El.innerText = "fim da rodada!";

    const str = "venceu esta rodada."

    if (hasWinner === GREEN)
        h3El.innerText = `VERDE ${str}`;
    else
        h3El.innerText = `ROXO ${str}`;


    removeChildNodes(resultScreenEl);

    resultScreenEl.appendChild(h2El);
    resultScreenEl.appendChild(h3El);

    resultScreenEl.classList.remove(HIDDEN_CLASS);

    resultScreenEl.onclick = () => {
        resultScreenEl.classList.add(HIDDEN_CLASS);
    };

}; // renderPopUp()

// Function to create pieces when individual block is clicked
const createPieces = () => {

    const columnsList = document.getElementsByClassName('row')
    const currentPLayerEl = document.querySelector(`div[data-id="currentPlayer"]`);
    const CLASS_PLAYER_GREEN = "player--green";
    const CLASS_PLAYER_PURPLE = "player--purple";
    const MAX_POINTS = 3;
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

                        if (score.green === (MAX_POINTS - 1)) {
                            renderResultScreen();
                        } else {

                            score.green += 1;
                            updateScore(GREEN);
                            renderPopUp();
                            setTimeout(resetGame, DELAY);

                        }
                    } else if (hasWinner === PURPLE) {

                        if (score.purple === (MAX_POINTS - 1)) {
                            renderResultScreen();
                        } else {

                            score.purple += 1;
                            updateScore(PURPLE);
                            renderPopUp();
                            setTimeout(resetGame, DELAY);

                        }
                    }

                    hasWinner = undefined; // reset the variable;
                }
                console.log(map);
            }
        });
    }
}; // createPieces()