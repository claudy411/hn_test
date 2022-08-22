

function F21(a) {
    // parameter a has to be a row of a table
    let arr = [];
    let result = false;
    let k = 0;
    do {
        if (a === document.getElementById(('row' + k))) {

            for (let cell of a.cells) {

                arr.push(Number(cell.innerHTML));//get the value of each td of a row and put it inside a array as type number
            }

            for (let i = 0; i < arr.length; i++) {

                if (typeof arr[i] === 'number' && (arr[i] >= 1 && arr[i] <= 9)) {//are there only numbers between 1 and 9

                    const unique = [...new Set(arr)];//are they all unique
                    if (unique.length === 9) {//if there is a duplicate the length of the unique array is less than 9
                     
                        result = true
                        return result;
                    }
                }
            }

        }
       
        k++;

    } while (k < 9);

}