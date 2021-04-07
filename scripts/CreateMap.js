/**
 * GLOBAL CONSTANTS:
 */
const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];
const score = { black: 0, red: 0 };
const BLACK = "black";
const RED = "red";
const DRAW = "draw";

const removeChildNodes = (element, qty = 0) => {

    if (!qty)
        while (element.lastChild)
            element.removeChild(element.lastChild);
    else {
        let count = 0
        while (count <= qty) {
            element.removeChild(element.firstChild);
            count++;
        }
    }
}; // removeChildNodes(element, qty = 0)

const createMap = () => {

    const generalDiv = document.createElement('div');
    generalDiv.classList.add('game-wrapper')

    for (let i = 0; i < map.length; i++) {

        const row = map[i];
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('displayFlex--col');

        rowDiv.classList.add('row');

        for (let j = 0; j < row.length; j++) {

            const div = document.createElement('div');

            div.classList.add('block');
            div.classList.add('purple-neon');
            div.id = `block-${i}-${j}`;

            rowDiv.appendChild(div);

        }

        generalDiv.appendChild(rowDiv);

    }

    return generalDiv;
};