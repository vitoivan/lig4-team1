// Function to create pieces when individual block is clicked
const createPieces = () => {

    const blocksListEl = document.getElementsByClassName('block');

    for (let i = 0; i < blocksListEl.length; i++) {

        const block = blocksListEl[i];

        block.addEventListener('click', function() {
            // Get block parent element and store into a variable
            let currentBlockParentElement = block.parentElement

            // Create array of all currentBlockParentElement childs
            let arrayOfBlocks = currentBlockParentElement.childNodes

            // Create array for empty blocks
            let arrayOfEmptyBlocks = []

            // Iterate over arrayOfBlocks, check if block is empty and push it to array of empty blocks
            for (let i = 0; i < arrayOfBlocks.length; i++) {
                if (arrayOfBlocks[i].childNodes.length === 0) {
                    arrayOfEmptyBlocks.push(arrayOfBlocks[i])
                }
            }
            
            // Check if clicked block is the last element of arrayOfEmptyBlocks and append piece to it
            if (block === arrayOfEmptyBlocks[arrayOfEmptyBlocks.length - 1]) {
                if (block.childNodes.length < 1) {
                    const piece = document.createElement('div');
    
                    if (currentPlayer === RED_PLAYER) {
                        piece.classList.add('player-1');
                    }
        
                    if (currentPlayer === BLACK_PLAYER) {
                        piece.classList.add('player-2');
                    }
        
                    piece.classList.add('piece');
                    block.appendChild(piece);
                    return piece
                }
            }
        });
    }
};