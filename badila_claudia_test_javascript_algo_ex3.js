document.addEventListener("readystatechange", chargeEvents3, false);
function chargeEvents3() {
    if (document.readyState === "interactive") {
        // F31();
        console.log(F31())

    }
}

function F31() {
    let table= document.getElementById('to_check');
    let cont=0;

    for (let row of table.rows) {

        if(F21(row)===false){
           let text = document.createTextNode('Line '+ row +' incorrect');
                row.insertCell(cont).appendChild(text);
        }
        cont++;
    }
   
}
