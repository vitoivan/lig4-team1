console.log("===\nUNIT TESTS:\n===");
let hasErros = false;

/**
 * testAlternatePlayersTurn()
 */

const testPlayerSelection = () => {
    if (BLACK_PLAYER === 1)
        return RED_PLAYER === 2;

    if (BLACK_PLAYER === 2)
        return RED_PLAYER === 1;

    hasErros = true;
}; // testPlayerSelection()

const resultPlayerSelection = testPlayerSelection();
const expectedPlayerSelection = true;

console.assert(resultPlayerSelection, expectedPlayerSelection, `The "${testPlayerSelection.name}" is returning ${resultPlayerSelection}, but was expecting ${expectedPlayerSelection}.`);

/**
 * testAlternatePlayersTurn()
 */
const blocksListEl = document.getElementsByClassName('block');

for (let i = 0; i < blocksListEl.length; i++) {

    const blockEl = blocksListEl[i];

    blockEl.addEventListener('click', testAlternatePlayersTurn);
}
const testAlternatePlayersTurn = () => {

    hasErros = true;
}; // testAlternatePlayersTurn()

const resultAlternatePlayersTurn = testAlternatePlayersTurn();
const expectedAlternatePlayersTurn = true;

console.assert(resultAlternatePlayersTurn, expectedAlternatePlayersTurn, `The "${testAlternatePlayersTurn.name}" is returning ${resultAlternatePlayersTurn}, but was expecting ${expectedAlternatePlayersTurn}.`);

if (!hasErros)
    console.log("Tudo OK!");