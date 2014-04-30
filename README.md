EulerPrimalityTest
==================
This repo contains codes for computing the Jacobi symbol and executing the Solovay-Strassen primality test to which I refer as [Euler Primality test](http://en.wikipedia.org/wiki/Solovay%E2%80%93Strassen_primality_test) because it uses the [Euler criterion](http://en.wikipedia.org/wiki/Euler%27s_criterion).



`JacobiSymbol.js` and `JacobiSymbol1.js` are two different ways of computing the [Jacobi symbol](http://en.wikipedia.org/wiki/Jacobi_symbol) in javascript.

`JacobiSymbol.js` code was developed by Fred Richman. I retrieved and modified the code from:
http://math.fau.edu/richman/

`JacobiSymbol1.js` code was developed by Peter Strandmark in Matlab language. I retrieved, converted to javascipt, and modified the code from:
http://www.mathworks.com/matlabcentral/fileexchange/24672-jacobi-and-legendre-symbol/content/jacobi.m

## Eulers criterion

The primality test that uses Euler's criterion:
> For an integer ![latex](http://latex.codecogs.com/gif.latex?a) and an odd integer ![latex](http://latex.codecogs.com/gif.latex?p), where ![latex](http://latex.codecogs.com/gif.latex?1%3Ca%3Cp), 

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
If ![latex](http://latex.codecogs.com/gif.latex?a%5E%7B%5Cfrac%7Bp-1%7D%7B2%7D%7D%20%5Cequiv%20Jacobi%28a%2Cp%29%20%5Cmod%7Bp%7D) then ![latex](http://latex.codecogs.com/gif.latex?p) is probably prime. 

> If ![latex](http://latex.codecogs.com/gif.latex?p) is composite, then there exists at least one integer  ![latex](http://latex.codecogs.com/gif.latex?a) such that the congruence relation does not hold.

`isEulerPrime.js` is the code for Euler's  primality test.
First, the program randomly picks base 
![latex](http://latex.codecogs.com/gif.latex?a)
. Second, for a potential odd prime number 
![latex](http://latex.codecogs.com/gif.latex?p) 
it computes  the 
![latex](http://latex.codecogs.com/gif.latex?Jacobi(a,p))
, and then determines whether 
![latex](http://latex.codecogs.com/gif.latex?a%5E%7B%5Cfrac%7Bp-1%7D%7B2%7D%7D) 
is congruent to 
![latex](http://latex.codecogs.com/gif.latex?Jacobi%28a%2Cp%29%5Cmod%20p)
. If the congruence relationship holds then 
![latex](http://latex.codecogs.com/gif.latex?p) 
is probably prime. If it does not than 
![latex](http://latex.codecogs.com/gif.latex?p) 
is composite. For prime numbers the congruence relation holds for all integers between 1 and the prime number. For non prime odd numbers the relation does not holds for some integers between 1 and the non prime number, but for some it does. s a result, the accuracy of the test increases as you try several distinct bases,i.e. integers between 1 and the odd number you check for primality.
![latex](http://latex.codecogs.com/gif.latex?a) 
. If you check all bases from 1 to 
![latex](http://latex.codecogs.com/gif.latex?p) 
that is all numbers in the range 
![latex](http://latex.codecogs.com/gif.latex?(1,p)) 
and the aforementioned congruence relation holds for every number then 
![latex](http://latex.codecogs.com/gif.latex?p) 
is certainly prime. If the relation fails at least once then 
![latex](http://latex.codecogs.com/gif.latex?p) 
is composite.

## Example
(Add example here)

