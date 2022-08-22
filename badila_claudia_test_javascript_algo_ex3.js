document.addEventListener("readystatechange", chargeEvents3, false);
function chargeEvents3() {
    if (document.readyState === "interactive") {

        F31();
        F32();
    }
}

function F31() {
    // fillMatrix() help function

    let table = document.getElementById('to_check');

    for (let i = 0; i < fillMatrix().length; i++) {
        for (let j = 0; j < fillMatrix()[i].length; j++) {
            if (F21(fillMatrix()[i][j]) === false) {
                text1 = document.createTextNode("Line " + (i + 1) + ' incorrect');
                table.rows[i].insertCell().appendChild(text1);
            }
        }
    }

}
function F32() {
    // fillMatrix() help function
    let table = document.getElementById('to_check');
    for (let i = 0; i < fillMatrix().length; i++) {
        for (let j = 0; j < fillMatrix()[i].length; j++) {
            if (F21(fillMatrix()[i][j]) === false) {
                text1 = document.createTextNode("Column " + (j + 1) + ' incorrect');
                table.rows[i].insertCell().appendChild(text1);
            }
        }
    }
}

function fillMatrix() {
    //function that recovers all the numbers of the table in a bidimensional array
    let table = document.getElementById('to_check');
    let lines = new Array(9);

    for (let i = 0; i < 9; i++) {
        lines[i] = new Array();
        for (let j = 0; j < 9; j++) {
            lines[i][j] = table.rows[i].cells[j].innerHTML;
        }
    }
    return lines;
}