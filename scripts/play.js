/**
 * 
 * GLOBAL CONSTANTS:
 * 
 */
const firstPlayer = getRandomPlayer();
const secondPlayer = (firstPlayer === 1) ? 2 : 1;

console.log(`First player: ${firstPlayer}`);
console.log(`Second player: ${secondPlayer}`);

/**
 * 
 * DOM - MANIPULATION:
 * 
 */

 const generalDivEl = createMap();
 document.getElementById('container').appendChild(generalDivEl);
