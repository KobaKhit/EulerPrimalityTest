// This code tests a number p greater than or equal to zero for primality using the Euler critetion.

//Computes the Jacobi symbol
function jacobi(a, b) {
    if (b % 2 == 0 || b <= 0) {
        return 0
    }
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

// Tests an integer p for primality 
function isPrimeEuler(p) {
    var power = (p - 1) / 2;
    var res = ""
    a = ceil(random() - 0.5) // random base a
    baseMod = pow(a, power) % p;
    var jacMod = jacobi(a, p) % p
    if (baseMod == p - 1) {
        baseMod = -1
    }
    if (baseMod != jacMod) {
        res = "Not Prime"
    }
    else {
        res = "is prime"
    }
    return res
}
