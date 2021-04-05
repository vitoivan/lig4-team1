// Function to create pieces when individual block is clicked
const createPieces = () => {
    const blocks = document.getElementsByClassName('block')
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]
        block.addEventListener('click', function(event) {
            const piece = document.createElement('div')
            piece.classList.add('piece')
            block.appendChild(piece)
        })
    }
}
const invokeCreatePieces = createPieces()
