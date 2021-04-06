console.log("===\nUNIT TESTS:\n===");
let hasErros = false;

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

if (!hasErros)
    console.log("Tudo OK!");