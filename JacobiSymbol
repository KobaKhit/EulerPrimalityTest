// Computes the Jacobi symbol for any integers a and b greater than or equal to zero
// Author: Fred Richman
// Retrieved from <http://math.fau.edu/richman/jacobi.htm>
// Modified by: Koba Khitalishvili

function jacobiSymbol(m, n) {
    var a = new Object();
    a[0] = 1;
    a[1] = m;
    a[2] = n;

    function jacobi(a) {
        var b = new Object();
        b[0] = 1;
        b[1] = 1;
        b[2] = 1; // Array(1,1,1);
        var sign = a[0];
        var m = a[1];
        var n = a[2];
        
        if( n <= 0 || n % 2 == 0){return 0}
        
        if (m > n - 1) {
            m = m % n;

        }
        m = m % n;
        if (m == 0) {

            return 0;
        }
        if (m == 1) {
            if (sign > 0) {
                return 1;
            }
            return -1;
        }
        var J2n = 1;
        if ((3 == (n % 8)) || (5 == (n % 8))) J2n = -1;
        if (0 == (m % 2)) {
            b[0] = J2n * sign;
            b[1] = m / 2;
            b[2] = n;
            return jacobi(b);
        }
        if ((3 == (n % 4)) && (3 == (m % 4))) {
            b[0] = -sign;
            b[1] = n % m;
            b[2] = m;
            return jacobi(b);
        } else {
            b[0] = sign;
            b[1] = n % m;
            b[2] = m;
            return jacobi(b);
        }
    }
    return jacobi(a)
}

