// String Reversal 
// 1.Take a string as input and return a string which is reverse of the input string.

// newStr="h"+newStr = "h"
// newStr="e"+newStr = "eh"
// newStr="l"+newStr = "leh"
// newStr="l"+newStr =  "lleh"
// newStr="o"+newStr =  "olleh"


// Approach 1
// let str='hello'
// let newStr=''
// for(let i=str.length-1;i>=0;i--){
//     newStr+=str[i]
// }
// console.log(newStr);

// Approach 2

// newStr="h"+newStr = "h"
// newStr="e"+newStr = "eh"
// newStr="l"+newStr = "leh"
// newStr="l"+newStr =  "lleh"
// newStr="o"+newStr =  "olleh"

// let str='hello'
// let newStr=''
// for(let l of str){
//     newStr=l+newStr

// }
// console.log(newStr);

// Approach 3
// inbuilt functions split(),reverse(),join() to reverse a string
// split() - converts a string into an array // ['h','e','l','l','o']
// reverse() - reverses the array // ['o','l','l','e','h']
// join() - converts the array into a string // 'olleh'

// let str='hello'
// console.log(str.split("").reverse().join(""));

// 2. sum of all the digits in a string 


// Approach 1
// let str='4567'
// let sum=0
// for(let l of str){
//     sum+=parseInt(l)
// }    
// console.log(sum);

// Approach 2
// let str='4567'
// let sum=0
// for(let i=0;i<str.length;i++){
//     sum+=parseInt(str[i])
// }
// console.log(sum);

// Approach 3
// let str='4567'
// let sum=0
// for(let i=0;i<str.length;i++){
//     sum+=Number(str[i])
// }
// console.log(sum);


// str1 str2 => '+' work with strings if both are strings and numbers if both are numbers
// str1 str2 => '-' work with strings if both are numbers
// str1 str2 => '*' does not work with strings if both are numbers
// str1 str2 => '/' does not work with strings if both are numbers
// str1 str2 => '%' does not work with strings if both are numbers

// let str1='5'
// let str2='6'
// console.log(str1+str2) // 56
// console.log(str1-str2) // -1
// console.log(str1*str2) // 30
// console.log(str1/str2) // 0.8333333333333334
// console.log(str1%str2) // 5

// 3.character replacement 
// Implement a program that replace all occurances of q with p in a given string.

// Approach 1

// let str='QUALITY'
// let newStr=''
// for(let l of str){
//     if(l==='Q'){
//         newStr+='P'
//     }
//     else{
//         newStr+=l
//     }
// }
// console.log(newStr);

// Approach 2
// let str='QUaquality'
// let s1=str.replaceAll('Q','P')
// let s2=s1.replaceAll('q','p')
// console.log(s2);

// 4.String Case Analyser 
// develop a program that determines if a given condition is entirely  uppercase and lowercase letters in a given string.

// Approach 1

// let str='hello'
// let upperCase=true
// let lowerCase=true
// for(let l of str){
//     if(l===l.toUpperCase()){
//         lowerCase=false
//     }
//     else{
//         upperCase=false
//     }
// }
// console.log(upperCase);
// console.log(lowerCase);



// ---------------
// Write a program that takes a string as input and prints the sum of the ASCII values of its characters.

// Approach 1
let str='hello'
let sum=0
for(let l of str){
    sum+=l.charCodeAt()
}
console.log(sum);



