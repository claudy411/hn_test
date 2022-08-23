document.addEventListener("readystatechange", chargeEvents3, false);
function chargeEvents3() {
    if (document.readyState === "interactive") {
        // createTable();
        F31();
        F32();
        F33();
    }
}

function F31() {
    // fillMatrix() help function that recovers the numbers of the table

    let table = document.getElementById('error');
    let tab = document.getElementById('to_check')

    for (let i = 0; i < fillMatrix().length; i++) {

        if (F21(fillMatrix()[i]) === false) {

            let tr = document.createElement("tr"); //create the rows
            table.appendChild(tr);
            text1 = document.createTextNode("Line " + (i + 1) + ' incorrect');
            table.rows[0].insertCell().appendChild(text1);
            for (let j = 0; j < fillMatrix()[i].length; j++) {
                text2 = document.createTextNode(tab.rows[i].cells[j].innerHTML);
                table.rows[0].insertCell().appendChild(text2);
            }
        }

    }


}
function F32() {
    // fillMatrix() help function
    let table = document.getElementById('error');
    let tab = document.getElementById('to_check');
    let column = 0;
    let tabColumn = [];
    let tr = document.createElement("tr"); //create the rows
    table.appendChild(tr);
    for (let i = 0; i < fillMatrix().length; i++) {
        for (let j = 0; j < fillMatrix()[i].length; j++) {
            if (F21(fillMatrix()[j]) === false) {

                column = j + 1;
                tabColumn = tab.rows[i].cells[j].innerHTML;
                text2 = document.createTextNode(tabColumn);
                table.rows[1].insertCell().appendChild(text2);
            }

        }
    }

    if (column > 0) {
        text1 = document.createTextNode("Column " + column + ' incorrect');
        table.rows[1].insertCell(0).appendChild(text1);
    }


}

function F33() {
    let table = document.getElementById('error');
    for (let i = 0; i < getRegions().length; i++) {
        for (let j = 0; j <= 4; j++) {
            let arrConcat = getRegions()[i][j].concat(getRegions()[i][j + 1], getRegions()[i][j + 2]);
            if (F21(arrConcat) === false) {
                let tr = document.createElement("tr"); //create the rows
                table.appendChild(tr);
                text1 = document.createTextNode("Region " + (i + 1) + ' incorrect');
                table.rows[2].insertCell().appendChild(text1);
                for (let k = 0; k < arrConcat.length; k++) {

                    text2 = document.createTextNode(arrConcat[k]);
                    table.rows[2].insertCell().appendChild(text2);
                }

            }
            break;
        }


    }

}

//helper functions:

function fillMatrix() {
    //function that recovers all the numbers of the table in a bidimensional array
    let table = document.getElementById('to_check');
    let matrix = new Array(9);

    for (let i = 0; i < 9; i++) {
        matrix[i] = new Array();
        for (let j = 0; j < 9; j++) {
            matrix[i][j] = table.rows[i].cells[j].innerHTML;
        }
    }
    return matrix;
}


function getRegions() {
    // put regions in another bidimensional array
    let mat = new Array(9);
    for (let i = 0; i < mat.length; i++) {
        mat[i] = [];
    }

    for (let i = 0; i < fillMatrix().length; i++) {

        if (i < 3) {
            mat[0].push(fillMatrix()[i].slice(0, 3))
            mat[1].push(fillMatrix()[i].slice(3, 6))
            mat[2].push(fillMatrix()[i].slice(6, 9))
        }
        if (i > 2 && i < 6) {
            mat[3].push(fillMatrix()[i].slice(0, 3))
            mat[4].push(fillMatrix()[i].slice(3, 6))
            mat[5].push(fillMatrix()[i].slice(6, 9))
        }
        if (i > 5 && i < 9) {
            mat[6].push(fillMatrix()[i].slice(0, 3))
            mat[7].push(fillMatrix()[i].slice(3, 6))
            mat[8].push(fillMatrix()[i].slice(6, 9))
        }

    }
    return mat;

}