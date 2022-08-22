

function F21(a) {
    if (a.length === 9) {

        let arr = [];
        for (let i = 0; i < a.length; i++) {
            arr.push(Number(document.getElementsByTagName('td')[i].innerHTML));//get the value of each td of a row
        }
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {//are there only numbers

                const unique = [...new Set(arr)];//are they all unique
                if (unique.length === 9) {//if there is a duplicate the length of the unique array is less than 9
                    return true;
                }
            }
        }

    }
    return false;
}