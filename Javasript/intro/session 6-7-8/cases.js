// 0 1
// 2 =>  10  => binary numbers 
// 156 => 10011100


// reamesh 
// ascii value of unicode
// A-Z => 65-90
// a-z => 97-122
// 0-9 => 48-57
//  let str = 787

// console.log(String.fromCharCode(str)) ;// A
// a=2;
// b=3;
// console.log(a%b); // 5

// // find sum of the digits of a number 
// let num = 12345
// let sum = 0
// while(num>0){
//     sum += num%10
//     num = Math.floor(num/10)
// }

// console.log(sum)

//Take a number and return all the even digits of the number.

// Constraints:
// 0 <= number <= 10000

// Input:
// A single integer is provided as input.
// Output:
// Return a list of even digits of the number, each digit in a new line.Return -1 in case there are no even digits in the number.

// Example:
// Input:
// 12345
// Output:
// 2
// 4

// Input:
// 13579
// Output:
// -1

// Input:

// let n1=12345
// while(n1>0){
//     let digit = n1%10
//     if(digit%2==0){
//         console.log(digit)
//     }
//     n1=Math.floor(n1/10)
// }
// 2
// 4

// let n2=13579
// let flag = false

// while(n2>0){
//     let digit = n2%10
//     if(digit%2==0){
//         console.log(digit)
//         flag = true
//     }
//     n2=Math.floor(n2/10)
// }
// if(!flag){
//     console.log(-1)
// }

// Take a integer as input and return the number of zeroes in the input.

// Constraints:
// 0 < N <= 1000000

// Input:
// A single integer is provided as input.
// Output:
// Return the number of zeroes in the input integer.

// Example:
// Input:
// 10203
// Output:
// 2

// Input:
// 12345
// Output:
// 0


// Take two integers as input and return all the prime numbers in between them (exclusive range).

// Constraints:
// 1 <= N <= 1000000

// Input:
// Two integers are provided as input.

// Output:
// Return all the prime numbers in between the two integers, each number in a new line.

// Example:
// Input:
// 1 10
// Output:
// 2
// 3
// 5
// 7

// n1=1
// n2=10
// for(let i=n1+1;i<n2;i++){
//     let flag = true
//     for(let j=2;j<=Math.sqrt(i);j++){
//         if(i%j==0){
//             flag = false
//             break
//         }
//     }
//     if(flag){
//         console.log(i)
//     }
// }

// Take an integer and print 'YES' if the input integer is an armstrong number, otherwise print 'NO'.

// Hint:
// A number is called Armstrong number if the sum of its own digits each raised to the power of the number of digits is equal to the original number itself.
// Example:
// 123 => 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36
// 1234 => 1^4 + 2^4 + 3^4 + 4^4 = 1 + 8 + 27 = 40

// Constraints:
// 0 < N < 10^6

// let n=1234
// let n1=n
//  sum=0
// let count=0
// while(n>0){
//     count++
//     n=Math.floor(n/10)
// }
// n=n1
// while(n>0){
//     let digit=n%10
//     sum+=Math.pow(digit,count)
//     n=Math.floor(n/10)
// }
// if(sum==n1){
//     console.log('YES')
// }
// else{
//     console.log('NO')
// }

// Take an integer as input and print 'YES' if the number is a special number. Otherwise, print 'NO'.

// Hint:
// A special number is a number which is equal to the sum of the factorials of its digits.
// Example:
// For number = 145, the output should be 1! + 4! + 5! = 145
// Hence 145 is a special number.

// Constraints:
// 0<=number<=100
// let n=145
// let n1=n
// sum=0

// while(n>0){
//     let digit=n%10
//     let fact=1
//     for(let i=1;i<=digit;i++){
//         fact*=i
//     }
//     sum+=fact
//     n=Math.floor(n/10)
// }
// if(sum==n1){
//     console.log('YES')
// }
// else{
//     console.log('NO')
// }


// // For number from 1 to 100 if number is divisible by 3 print 'Hello' if divisible by 5 print 'World', if divisible by 15 print 'HelloWorld' else print the number itself

//  for(let i=1;i<=100;i++){
//         if(i%15==0){
//             console.log('HelloWorld')
//         }
//         else if(i%3==0){
//             console.log('Hello')
//         }
//         else if(i%5==0){
//             console.log('World')
//         }
//         else{
//             console.log(i)
//         }
//     }

// Take an integer input and print 'YES' if the integer is a mars number, else print 'NO'.

// Hint:
// A number is called a Mars number if the number is a palindrome and the sum of the digits is a prime number.
// Example:
// 121 => 121 is a palindrome and 1+2+1 = 4 which is not a prime number.
// 131 => 131 is a palindrome and 1+3+1 = 5 which is a prime number.
// Hence 131 is a Mars number.
// let n=131
// let n1=n
// let sum=0
// let flag=true
// while(n>0){
//     let digit=n%10
//     sum+=digit
//     n=Math.floor(n/10)
// }
// for(let i=2;i<=Math.sqrt(sum);i++){
//     if(sum%i==0){
//         flag=false
//         break
//     }
// }
// let rev=0
// n=n1
// while(n>0){
//     let digit=n%10
//     rev=rev*10+digit
//     n=Math.floor(n/10)
// }
// if(rev==n1 && flag){
//     console.log('YES')
// }
// else{
//     console.log('NO')
// }


// Take an integer N and print the sum of series given below upto N numbers.

//  S =  2+4+6+8 ….. N

// Example:
// if N = 3
// S = 2+4+6 = 12

// let n=3
// let sum=0
// for(let i=1;i<=n;i++){
//     sum+=2*i
// }
// console.log(sum)

// Take an integer N and print the sum of series given below upto N numbers.

//  S = 1!+2!+3!+4!....N!
n=4
let sum=0
for(let i=1;i<=n;i++){
    let fact=1
    for(let j=1;j<=i;j++){
        fact*=j
    }
    sum+=fact
}
console.log(sum)

// Take an integer N and print the sum of series given below upto N numbers.

//  S = ½ + ⅔ + ¾ + ⅘+ ⅚ + …. n/(n+1)

 n=3
 sum=0
for(let i=1;i<=n;i++){
    sum+=i/(i+1)
}
console.log(sum)

// Take an integer N and print the sum of series given below upto N numbers.

//  S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+

n=3
sum=0
let sum1=0
for(let i=1;i<=n;i++){
    sum1+=i
    sum+=i/sum1
}
console.log(sum)

// Print the pattern given below, using loops.

// Input:
// No input is required.

// Output:
// 1
// 01
// 101
// 0101
// 10101
// 010101

// let n=6
// for(let i=1;i<=n;i++){
//     let str=''
//     for(let j=1;j<=i;j++){
//         if((i+j)%2==0){
//             str+='1'
//         }
//         else{
//             str+='0'
//         }
//     }
//     console.log(str)
// }


// let str=787
// console.log(String.fromCharCode(str))

// Write a program that takes a non-negative integer as input and prints the sum of the squares of its digits.

// n=123
// sum=0
// while(n>0){
//     let digit=n%10
//     sum+=digit*digit
//     n=Math.floor(n/10)
// }
// console.log(sum)

// Write a program that takes an array of integers as input and prints the second biggest number in the array. If the array contains fewer than two unique elements, print “Not enough unique elements.”

let arr=[10,20,30,40,50]
let max1=arr[0]
let max2=-Infinity
for(let i=1;i<arr.length;i++){
    if(arr[i]>max1){
        max2=max1

        max1=arr[i]
    }
    else if(arr[i]>max2 && arr[i]!=max1){
        max2=arr[i]
    }
}
if(max2==-Infinity){
    console.log('Not enough unique elements.')
}
else{
    console.log(max2)
}

// Write a program that takes an integer n as input and prints the sum of all non-prime numbers between 1 and n (inclusive).

// let n=10
// let sum=0
// for(let i=2;i<=n;i++){
//     let flag=true    
//     for(let j=2;j<=Math.sqrt(i);j++){
//         if(i%j==0){
//             flag=false

//             break
//         }
//     }
//     if(!flag){
//         sum+=i
//     }
// }
// console.log(sum)

// Write a program that takes an integer n as input and prints the sum of all prime numbers between 1 and n (inclusive).

// n=20
// sum=0

// for(let i=2;i<=n;i++){
//     let flag=true
//     for(let j=2;j<=Math.sqrt(i);j++){
//         if(i%j==0){
//             flag=false
//             break

//         }
//     }
//     if(!flag){
//         sum+=i
//     }
// }
// console.log(sum)

// Write a program that takes an integer n as input and prints the sum of the series S = 1 - 2 + 3 - 4 + \ldots \pm n for n terms.

n=10
sum=0
for(let i=1;i<=n;i++){
    if(i%2==0){
        sum-=i
    }
    else{
        sum+=i
    }
}
console.log(sum)