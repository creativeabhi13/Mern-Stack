// String
// string is immutable

function isBlank(str) {
    return str.length === 0

}
console.log(isBlank('')) // true
console.log(isBlank('abc')) // false

let str ='hello'
console.log(str.length) // 5
console.log(str[0]) // h
console.log(str.charAt[0]) // h
console.log(str[4]) // o
console.log(str.charAt(4)) // o

for(let l of str){
    console.log(l)
}

// string is immutable
let str1 = 'Papa'
str1[0] = 'k'
console.log(str1) // Papa
// once created a string it cannot be changeds
str1='k'+str1.slice(1)
console.log(str1) // kapa

// replace and replaceAll
// it will not change the original string but it will return a new string

let str2 = 'papa'
let newStr = str2.replace('p', 'k')
console.log(newStr) // hello earth
let newStr1 = str2.replaceAll('pa', 'r')
console.log(newStr1) // hell0 w0rld

console.log(str2.slice(1, 3)) // ap