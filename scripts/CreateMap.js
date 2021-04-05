const map = [
    [, , , , , , ],
    [, , , , , , ],
    [, , , , , , ],
    [, , , , , , ],
    [, , , , , , ],
    [, , , , , , ],
];


const createMap = () => {

        const generalDiv = document.createElement('div');

        for (let i = 0; i < map.length; i++) {

            const row = map[i];
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('displayFlex');

            rowDiv.classList.add('row');

            for (let j = 0; j < row.length; j++) {

                const div = document.createElement('div');

                div.classList.add('block');
                div.id = `block-${i}-${j}`;

                rowDiv.appendChild(div);

            }

            generalDiv.appendChild(rowDiv);

        }

        return generalDiv;
    }
    // const generalDiv = createMap();
    // document.getElementById('container').appendChild(generalDiv);