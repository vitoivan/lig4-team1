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
            const piece = document.createElement('div')

            if (currentPlayer === PLAYER1) {
                piece.classList.add('black-player')
                currentPlayer = 1
            }
            if (currentPlayer === PLAYER2) {
                piece.classList.add('red-player')
                currentPlayer = 2
            }
            let lastBlock = arrayOfEmptyBlocks[arrayOfEmptyBlocks.length - 1]

            if (lastBlock) {

                let blockXPosition = lastBlock.id.split('-')[1]
                let blockYPosition = lastBlock.id.split('-')[2]

                map[blockYPosition][blockXPosition] = currentPlayer
                console.log(map)

                getCurrentPlayer()
                lastBlock.appendChild(piece)
                checkWin(lastBlock)
            }
        })
    }
}