// Function to create pieces when individual block is clicked
const createPieces = () => {

    const blocksListEl = document.getElementsByClassName('block');

    for (let i = 0; i < blocksListEl.length; i++) {

        const block = blocksListEl[i];

        block.addEventListener('click', function() {

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
            } 
        });
    }
}; // createPieces();

// createPieces();