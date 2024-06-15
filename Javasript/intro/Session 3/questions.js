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