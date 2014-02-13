EulerPrimalityTest
==================
This repo contains codes for computing the Jacobi symbol and executing the Solovay-Strassen primality test to which I refer as [Euler Primality test](http://en.wikipedia.org/wiki/Solovay%E2%80%93Strassen_primality_test) because it uses the [Euler criterion](http://en.wikipedia.org/wiki/Euler%27s_criterion).



JacobiSymbol.js and JacobiSymbol1.js are two different ways of computing the [Jacobi symbol](http://en.wikipedia.org/wiki/Jacobi_symbol) in javascript.

JacobiSymbol.js code was developed by Fred Richman. I retrieved and modified the code from:
http://math.fau.edu/richman/

JacobiSymbol1.js code was developed by Peter Strandmark in Matlab language. I retrieved, converted to javascipt, and modified the code from:
http://www.mathworks.com/matlabcentral/fileexchange/24672-jacobi-and-legendre-symbol/content/jacobi.m

isEulerPrime.js is the code for Euler's  primality test that I wrote.
First, the program randomly picks base a. Second, it computes  the Jacobi(a,p), and then determines whether 
pow(a,(p-1)/2) is equivalent to Jacobi(a,p) mod p. If it is equivalent then p is probably prime. If it is not equivalent than p is composite. The accuracy of the test increases as you try different bases a. If you check all bases a from 1 to p that is all numbers in the range (1,p) and the equivalence condition is true in every case then p is certainly prime. If the condition fails at least once then p is composite.


