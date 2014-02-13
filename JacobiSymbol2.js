//Computes jacobi symbol for any integers a and b
// Author:Petter Strandmark
// Original language: Matlab
// Retrieved from: <http://www.mathworks.com/matlabcentral/fileexchange/24672-jacobi-and-legendre-symbol/content/jacobi.m>
// Converted to javascript and Modified by: Koba Khitalishvili

function jacobi(a, b) {

    if (b % 2 == 0 || b <= 0) {
        return 0
    }
    else {}

    a = a % b;

    //Trivial cases
    if (a == 0) {
        var jac = 0
    }
    else if (a == 1) {
        var jac = 1
    }

    // a is even
    else if (a % 2 == 0) {
        if (b % 8 == 1 || b % 8 == 7) {
            var jac = jacobi(a / 2, b);
        }
        else {
            var jac = -jacobi(a / 2, b)
        }
    }
    // a and b are odd
    else {

        if (b % 4 == 3 && a % 4 == 3) {
            jac = -jacobi(b, a);
        }
        else {
            jac = jacobi(b, a)
        }
    }
    return jac
}
