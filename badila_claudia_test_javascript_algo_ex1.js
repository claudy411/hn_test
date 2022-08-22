document.addEventListener("readystatechange", chargeEvents, false);

var array_number = new Array(9);
array_number[0] = "4 2 7 3 5 1 9 8 6";
array_number[1] = "9 8 3 7 6 2 5 1 4";
array_number[2] = "1 5 6 8 9 4 7 2 3";
array_number[3] = "2 3 9 1 8 5 4 6 7";
array_number[4] = "7 4 1 6 3 9 2 5 8";
array_number[5] = "5 6 8 2 4 7 1 3 9";
array_number[6] = "8 7 2 9 1 3 6 4 5";
array_number[7] = "3 9 5 4 2 6 8 7 1";
array_number[8] = "6 1 4 5 7 8 3 9 6";

function chargeEvents() {
    if (document.readyState == "interactive") {
        let tr, td;

        let row = 9;
        let column = 9;
        let table = document.getElementById('to_check');

        for (let i = 0; i < row; i++) {
            tr = document.createElement("tr"); //create the rows
            table.appendChild(tr);//add tr to the table
            for (let j = 0; j < column; j++) {
                td = document.createElement("td");//create the columns
                tr.appendChild(td);  //add the td to tr 
                let cont = F11(array_number);
                td.appendChild(F12(cont[i][j]));
            }
        }


    }

}

//function that returns a 2 dimensions array
function F11(arr) {
    let result_arr = [];
    arr.map(item => {
        let content_arr = item.split(' ');
        result_arr.push(content_arr);
    })
    return result_arr;
}

//function that creates the text to be shown on the table
function F12(text) {
    return document.createTextNode(text);
}

