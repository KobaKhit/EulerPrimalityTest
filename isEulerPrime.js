// This code tests an integer p for primality using the Euler critetion.
// Author: Koba Khitalishvili
// Date: 2/13/2014
// Third party code: Peter Strandmark

//Computes the Jacobi symbol using the code from jacobiSymbol1.js file
function jacobi(a, b) {
    if (b % 2 == 0 || b <= 0) {
        return 0
    }
    a = a % b;
    //Trivial cases
    if (a == 0) {
        var jac = 0;
    }
    else if (a == 1) {
        var jac = 1;
    }
    // a is even
    else if (a % 2 == 0) {
        if (b % 8 == 1 || b % 8 == 7) {
            var jac = jacobi(a / 2, b);
        }
        else {
            var jac = -jacobi(a / 2, b);
        }
    }
    // a and b are odd
    else {
        if (b % 4 == 3 && a % 4 == 3) {
            jac = -jacobi(b, a);
        }
        else {
            jac = jacobi(b, a);
        }
    }
    return jac
}

// Tests an integer p for primality
function isPrimeEuler(p, method) {
    var power = (p - 1) / 2;
    var res = "";
    // Method 1: Randomly pick one base between 1 and p
    if (method == 1) {
        a = round(random() * p) // randomly picks base between 1 and p
        baseMod = pow(a, power) % p;
        if (baseMod == p - 1) {
            baseMod = -1
        }
        var jacMod = jacobi(a, p) % p;
        
        if (baseMod != jacMod) {
            res = "Not Prime"
        } else {
            res = "is prime"
        }
    }
    // Method 2: Check all bases between 1 and p
    if(method == 2){
        for (var i = 1; i < p; i++) {
            var baseMod = pow(i, power) % p;
            if (baseMod == p - 1) {
                baseMod = -1
            }
            var jacMod = jacobi(i, p) % p;
            
            if (baseMod != jacMod) {
                res = "Not Prime";
                break
            } else {
                res = "is prime"
            }
        }
    }
    
    return res
}

// Checks odd numbers from 1 to 100 for primality using method 2 that is picking all integers as base in the range (1,p)

for(var i = 1;i < 100; i += 2) {
    var a = isPrimeEuler(i,1);
    write(i); write(" "); writeln(a);
}
