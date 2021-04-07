// Function to create pieces when individual block is clicked
const createPieces = () => {

    const columnsList = document.getElementsByClassName('row')

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

                if (currentPlayer === 'black') {
                    pieceEl.classList.add('player--black');
                } else {
                    pieceEl.classList.add('player--red');
                }

                fallingBall(pieceEl)
                
                lastBlock.appendChild(pieceEl);
              
                getCurrentPlayer()
                
                const result = checkWin(blockXPosition, blockYPosition);

                if (result !== false) {
                    console.log(result);
                }
                console.log(map);
            }
        });
    }
};