/**
 * 
 * DOM - MANIPULATION:
 * 
 */

const generalDivEl = createMap();
document.getElementById('container').appendChild(generalDivEl);
createPieces();

/**
 * 
 * EVENT LISTENERS:
 * 
 */

document.getElementById('container').addEventListener("click", getCurrentPlayer);