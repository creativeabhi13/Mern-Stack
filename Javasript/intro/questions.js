// Q1: 

// assume some values of p(Principal), r(Rate of Interest) and t(Time) are given. 

// Si = (p*r*t)/100

// CI  two steps 
// amt = p*(1+r/100)^t
// ci = amt-p
let p=100000;
let r=2;
let t=5;

let si=(p*r*t)/100;
console.log(si);
let amt=p*(1+r/100)**t;
let ci=amt-p;
console.log(ci);
// Q2: 
// take a number and find its last digit

let n = 12368

let lastDigit = n % 10
console.log(lastDigit);

// q3: 

// Take two number, find the quotient : 
let a1=5;
let b1=2;
let r1=a1%b1;
let q=(a1-r1)/b1;
console.log(q);

// let ans = Math.floor(a/b) // 1.666
let ans = parseInt(a1/b1) // 1.666 => 1

console.log(ans)

let a2 = 10 
let b2  = 4
// find the decimal part n the division of a and b
let ans1 = a2/b2
let integerPart = parseInt(ans1);
let decimalPart = ans1 % 1
console.log(integerPart);
console.log(decimalPart);

// let a = 100

// a = 50

// a = "ramesh"

// console.log(a)


// let a = 5 

// a = a+5

// console.log(a) // 10


// Lets take 2 numbers and interchange their values:

 a = 10 
 b = 20 
 console.log(a,b);
// let temp=a;
// a=b;
// b=temp;
// console.log(a,b);

a=a+b;//  a=30,b=20
b=a-b; // b=10
a=a-b;//    a=20
console.log(a,b);