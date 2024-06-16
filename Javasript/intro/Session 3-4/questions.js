let a=310;
if(a>30)
    {
        console.log("P")
        if(a>40){
            console.log("Q")
        }
        else{
            console.log("R")
        }
    }
else{
    console.log("S")
    if(a<50){
        console.log("T")
    }
    else if(a>35){
        console.log("U")
    }
    else{
        console.log("V")
    }
}

let units = 50.5;
   bill = 0
  
if(units<=50 ){
  bill  = units*1
}
else if( units <=150 ) {
  bill = 50*1 + (units-50)*2
}
else if( units <=250 ){
  bill = 50*1 + 100*2 + (units-150)*3
}
else if(units>250 ){
  bill = 50*1 + 100*2 + 100*3 + (units-250) *4
}

if(bill>150 ){
  bill = bill + bill*20/100
}

console.log(bill)

// print all the 100 natural numbers
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// print all the odd numbers between 1 to 200
for (let i = 1; i <= 199; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// print all the even numbers between 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// count the number of even numbers between 1 to 100
let count = 0;
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        
        count=count+1;
        
    }
    
  
}
console.log(count);
// sum all the even numbers between 1 to 10
let sum = 0;
for (let i = 1; i <= 5; i++) {
    if(i % 2 === 0){
    sum = sum + i;}
}
console.log(sum);



// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 40
// Output:
// 40
  
  
   
     a = 10
     b = 20
    let mul = 1
   let flag = false
   
   for(let i = a; i<=b; i++){
      let last2digit = i%100 
      let secondLastDigit = parseInt(last2digit/10)
   
      if(i%2==0 && secondLastDigit==4){ // 140,142,144,146,148
        {
            mul = mul * i
            flag = true
        }
    }}
if(flag==true){
    console.log(mul)
}
else{
    console.log(0)
}


// find the factors of the number 
const num = 12

console.log(`The factors of ${num} is:`);


for(let i = 1; i <= num; i++) {


    if(num % i == 0) {
        console.log(i);
    }
}

// check the number is prime or not
let num1=12;
for(let i=2;i<num1;i++){
    if(num1%i==0){
        console.log("not prime")
        break;
    }
    else{
        console.log("prime")
        break;
    }
}

// Take 10 integers as input and print their product.

// Constraints:
// 1 <= T <= 100

// Input:
// Ten lines of input containing ten integers each.
// Output:
// Print the product of all the ten integers.

// Example:
// Input:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Output:

// 3628800


