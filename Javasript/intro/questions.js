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

// Q4: even or odd
let num=10;
if(num%2==0){
    console.log("even");
} else {
    console.log("odd");
}  

//  Q5: decimal or not
let num1=10.5;
if(num1%1==0){
    console.log("not a decimal");
}  else {
console.log("decimal");
}
// Q6: take two digit number and check if reverse of the number is same as the original number
let num2=12;
let rev=0;
let temp=num2;
while(temp>0){
    let rem=temp%10;
    rev=rev*10+rem;
    temp=parseInt(temp/10);
}
if(num2==rev){
    console.log("same");
}else {
    console.log("not same");


}

// Q7: take a three digit number and check if reverse of the number is same as the original number
let num3=121;
let rev1=0;
let temp1=num3;
while(temp1>0){
    let rem1=temp1%10;
    rev1=rev1*10+rem1;
    temp1=parseInt(temp1/10);
}
if(num3==rev1){
    console.log("same");
}
    else{
        console.log("not same");
    }