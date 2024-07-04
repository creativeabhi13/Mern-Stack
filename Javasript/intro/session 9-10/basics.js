function sumOfTwoNumber(a, b) {
  return a + b;
}
console.log(sumOfTwoNumber(5, 5)); // 10

console.log(sumOfTwoNumber.call(null, 6, 5)); // 11

// *
// **
// ***
// ****
// *****

function printStars(ch) // argument
{
  for(let i=1; i<=5; i++){
    let str = '';
    for(let j=1; j<=i; j++){
      str += ch;
    }
    console.log(str);
  }
}

printStars(5);
console.log('-------------------');
printStars('*'); // argument
console.log('-------------------');
printStars('#');
console.log('-------------------');
printStars('$');

// importance of function
// 1. Reusability
// 2. Modularity
// 3. Abstraction
// 4. Encapsulation
// 5. Code Optimization
// 6. Code Readability
// 7. Code Maintainability
// 8. Code Reusability

// Take a number     // => 345
// find sum of digits of the number  => 3+4+5=12
// find the square of the sum of the digits => 3^2+4^2+5^2=9+16+25=50
// find the cube of the sum of the digits  => 3^3+4^3+5^3=27+64+125=216


function sumOfDigits(num,power) {
  let sum = 0;
 while(num>0)
 {
let rem=num%10;
sum +=rem**power;
num=Math.floor(num/10);
 }
 console.log(sum);
}
sumOfDigits(345,1);
sumOfDigits(345,2);
sumOfDigits(345,3);

// return vs console.log
// return => return the value to the function
// console.log => print the value to the console

function add(a, b) {
    let ans=a+b;
    console.log(ans);
  return ans;
}
add(5, 5); // 10

function hello() {
    console.log('Hello World');
    return 'hello';
    console.log('Hello 1');
}
let x=hello()// Hello World
console.log("X is ",x);

// nCr = n! / r! * (n-r)!

// n=10 , r=4
// 10! / 4! * 6!


// return 
function factorial(n){
    let fact =1;
    for(let i=1;i<=n;i++){
        fact *= i;
    }
    return fact;

}
function nCr(n,r){
    let nFact = factorial(n);
    let rFact = factorial(r);
    let n_rFact = factorial(n-r);
    return nFact/(rFact*n_rFact);
}

console.log(nCr(10,4));


// let have a number =>456 
//  step1: find the sum of the digits => 4+5+6=15
//  step2: add the original number to the sum => 456+15=471
// step3: fint the sum of the digits of the result of step2 => 4+7+1=12

function sumOfDigits1(num) {
    let sum=0;
    while(num>0){
        let rem=num%10;
        sum += rem;
        num=parseInt(num/10);

    }
    return sum
}

let x1= 456;

let step1=sumOfDigits1(x1); // 15

let step2=x1+step1; // 471

let step3=sumOfDigits1(step2); // 12

console.log(step3); // 12


// let hello1 =() => { 
//     console.log('Hello World')
// }
// hello1();


//  function sum(a,b){
// let add =a+b;
// console.log(add);
//}

// let sum1 =(a,b)=>{
//     // let add =a+b;
//     // console.log(add);
//     return a+b;
// }


let sum2=(a,b)=>a+b; // single line arrow function 
 let sum3=(a,b)=>{return a+b}    // multi line arrow function
let x2=sum2(5,6);
let x3=sum3(5,6);
console.log(x2);
console.log(x3);


let sq=(a)=>a*a;
console.log(sq(5));


let f=z=>z+3; // 6
let g=y=>y*y; // 16

console.log(f(3)+g(4)) // 6+16=22

function hello3(p1,p2,p3,p4,p5){
  console.log(p1,p2,p3,p4,p5)
}

let x5=10;
let x6='Hello';
let x7=true;
let x8=10.5;
let x9=[10,20,30];
hello3(x5,x6,x7,x8,x9);

let greet =(name)=>{console.log('Hello',name)};
greet('Abhishek');

function hello4(n,fun2){
console.log(n);
fun2();
}

let x11=5;
let greet1=()=>{console.log("Good Morning")}

hello4(x11,greet1);
hello(x11,greet1());
