document.addEventListener("readystatechange", chargeEvents, false);


function chargeEvents() {
    if (document.readyState == "interactive") {
        let tr, td;

        let row = 9;
        let column = 9;
        let table = document.getElementById('to_check');
       
        for (let i = 0; i < row; i++) {
            tr = document.createElement("tr"); //create the rows
            table.appendChild(tr);//add tr to the table
            tr.setAttribute('id',('row'+i))
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

