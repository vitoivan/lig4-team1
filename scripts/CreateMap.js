const map = [
    [, , , , , ,],
    [, , , , , ,],
    [, , , , , ,],
    [, , , , , ,],
    [, , , , , ,],
    [, , , , , ,],
];


const createMap = () => {

        const generalDiv = document.createElement('div');

        for (let i = 0; i < map.length; i++) {

            const row = map[i];
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('displayFlex');

            if (i === 0)
                rowDiv.classList.add('tableHeader');
            else
                rowDiv.classList.add('tableRow');

            for (let j = 0; j < row.length; j++) {

                const div = document.createElement('div');

                if (i !== 0) {
                    div.classList.add('block');
                    div.id = `block-${i}-${j}`;
                } else {
                    div.id = `header-${i}-${j}`;
                    div.classList.add('header');
                }

                rowDiv.appendChild(div);

            }

            generalDiv.appendChild(rowDiv);

        }

        return generalDiv;
    }
    // const generalDiv = createMap();
    // document.getElementById('container').appendChild(generalDiv);