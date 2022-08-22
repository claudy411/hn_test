document.addEventListener("readystatechange", chargeEvents3, false);
function chargeEvents3() {
    if (document.readyState === "interactive") {
        F31();
    }
}

function F31() {
    let fila = [];
    let table = document.getElementById('to_check');

    for (let i = 0; i < table.children.length; i++) {
        fila.push(document.getElementsByTagName('td')[i].innerHTML);
    }

}