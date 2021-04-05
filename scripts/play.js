/**
 * 
 * DOM - MANIPULATION:
 * 
 */

const generalDivEl = createMap();
document.getElementById('container').appendChild(generalDivEl);

/**
 * 
 * EVENT LISTENERS:
 * 
 */

document.getElementById('container').addEventListener("click", currentPlayer);