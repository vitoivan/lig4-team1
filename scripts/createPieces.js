// Function to create pieces when individual block is clicked
const createPieces = () => {

    const blocksListEl = document.getElementsByClassName('block');

    for (let i = 0; i < blocksListEl.length; i++) {

        const block = blocksListEl[i];

        block.addEventListener('click', function() {

            const piece = document.createElement('div');

            piece.classList.add('piece');
            block.appendChild(piece);

        });
    }
}; // createPieces();

// createPieces();