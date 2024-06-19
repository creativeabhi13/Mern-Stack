// let i=1;
// for(;i<=5;)
// {
// console.log(i);
// i=i+1;
// }

let i=1;
while(i<=5)
{
    console.log(i);
    i=i+1;
}

// let n=1257;
// // step 1 : n=1257

// last =n%10; //7

// n=parseInt(n/10); //125.7=125

// // step 2: n=125
// last =n%10; //5

// n=parseInt(n/10); //12.5=12

// // step 3: n=12

// last =n%10; //2

// n=parseInt(n/10); //1.2=1

// n=parseInt(n/10); //0.1=0


// // using while loop
//  let n=1257;

// while(n!=0)
// {
//     last =n%10;
//     console.log(last);
//     n=parseInt(n/10);
// }
// // using for loop
// n=1257;
// for(;n!=0;)
// {
//     last =n%10;
//     console.log(last);
//     n=parseInt(n/10);
// }

// // using for loop

// for(n=1257;n!=0;n=parseInt(n/10))
// {
//     last =n%10;
//     console.log(last);
// }



// using while loop
 let n=1257;
 let rev=0;

while(n!=0)
{
    last =n%10;
    rev=rev*10+last;
    n=parseInt(n/10);
}  
 console.log(rev);
 n=rev;
 while(n!=0){
    let last =n%10;
    console.log(last);
    n=parseInt(n/10);
 }