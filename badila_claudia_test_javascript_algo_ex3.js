document.addEventListener("readystatechange", chargeEvents3, false);
function chargeEvents3() {
    if (document.readyState === "interactive") {

        F31();
        F32();
        getRegions()
    }
}

function F31() {
    // fillMatrix() help function

    let table = document.getElementById('to_check');

    for (let i = 0; i < fillMatrix().length; i++) {

        if (F21(fillMatrix()[i]) === false) {
            text1 = document.createTextNode("Line " + (i) + ' incorrect');
            table.rows[i].insertCell().appendChild(text1);
        }

    }


}
function F32() {
    // fillMatrix() help function
    let table = document.getElementById('to_check');
    for (let i = 0; i < fillMatrix().length; i++) {
        for (let j = 0; j < fillMatrix()[i].length; j++) {
            if (F21(fillMatrix()[j]) === false) {
                text1 = document.createTextNode("Column " + (j) + ' incorrect');
                table.rows[j].insertCell(0).appendChild(text1);
                break;
            }

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
    let arr = [
        [0, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 2, 3, 4, 5, 6, 7, 8, 9],
        [3, 2, 3, 4, 5, 6, 7, 8, 9],
        [3, 2, 3, 4, 5, 6, 7, 8, 9],
        [3, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 2, 3, 4, 5, 6, 7, 8, 9]
    ]
    let cont = 0;
    let mat = new Array(9);
    mat[0] = [];
    mat[1] = []
    mat[2] = []
    mat[3] = []
    mat[4] = []
    mat[5] = []
    mat[6] = []
    mat[7] = []
    mat[8] = []
    for (let i = 0; i < arr.length; i++) {


        if (i < 3) {
            // mat[0].push(arr[i].slice(0,3));
            mat[4].push(arr[i].slice(1, 5))


        }


        if (i >= 3 && i < 6) {
            mat[1].push(arr[i].slice(0, 3));

        }
        if (i >= 6 && i < 9) {
            mat[2].push(arr[i].slice(0, 3));

        }

        //    if(mat.length==0){
        //     mat[0]= new Array();
        //    }
        //     if(i%3!==0){
        //        mat[cont]=arr[i].slice(0,3)
        //     }else{
        //         cont++;
        //     }
    }
    console.log(mat)
    console.log(arr)

}