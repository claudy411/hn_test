

function F21(A) {
    var test = true;
    for ( i = 0; i < 8; i++) {
        for ( j = i + 1; j < 9; j++) {
            if (A[i] < 1 || A[i] > 9 || A[j] < 1 || A[j] > 9) {
              
                test = false;
                break;
            }
            if (Number(A[i]) === Number(A[j])) {

                test = false;
                break;
            }
        }
    }
    return test;
}