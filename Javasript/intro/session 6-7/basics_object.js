
// let arr = [10,20,30,40,50]
// arr[5] = 100 

// let obj =  {
// "name": "John", 
// "age": 30,
// "city": "New Delhi"
// }

// let obj = {
//     "num1" : 10,
//     "num2" : 20,
//     "num3" : 30,
//     "num4": 40,
//     "num5": 50
// }

// console.log(obj)



let obj =  {
    "name": "John", 
    "age": 30,
    "city": "New Delhi"
    }
    
    console.log(obj)
    
    // how to access any key
    // console.log(obj.age)
    // console.log(obj.name)
    
    // arr[0]
    
    // how to update any key 
    
    // arr[1] = 100
    // obj.age = 50
    
    // console.log(obj)
    
    
    // how to delete any key
    
    // obj.remove("age")
    // delete obj.name
    
    // console.log(obj)
    
    
    
    // add a new key: 
    
    // obj.name = "Abhishek"
    
    // obj.country = "India"
    
    // console.log(obj)
    
// keys


// let obj = {
//     "name": "John",
//      10 : "apple",
//     "age": 30,
//     true: "banana",
//     2: "orange",
//     "city": "New Delhi",
//     0 : "mango"
// }

// string, boolean, numbers

// number have highest priority => in ascending order
// remaining will be in the order of creation

// console.log(obj)


// let obj = {
//     10 : "apple",
//     "name": "John",
//     "age": 30,
//     "first word": "mom",
//     true: "yes",
//     "t": "hello",
// }


// let name = 100


// console.log(obj."first word")

// dot syntax has limitations

// dot syntax can only use those keys which are valid identifiers

// let t = "age"

// console.log(obj.t)

// dot syntax cannot access variables



// [] => square bracket syntax // universal syntax


let obj1 = {
    10 : "apple",
    "name": "John",
    "age": 30,
    "first word": "mom",
    true: "yes",
    "t": "hello",
}


// console.log(obj[10])

let t = "age"

console.log(obj1[t]) // obj["age"] => 30

console.log(obj1["t"]) // obj["t"] => "hello"
    
// loops


// let obj = {
    
//     "name": "John",
//     "age": 30,
//     "city": "New Delhi"
    
// }

// obj["name"] = "Abhishek"

// console.log(obj)


// for(let t in obj){
//     //   console.log(t, obj.t)
//     console.log(t, obj[t])
// }



// let obj = {
//     10 : "apple",
//     "name": "John",
//     "age": 30,
//     "first word": "mom",
//     true: "yes",
// }

// console.log(obj, typeof obj)


// data types of keys

// for(let t in obj){
//     console.log(t, typeof t)
// }

// all keys are string


// console.log(obj[10])
// console.log(obj[true])
// console.log(obj["true"])



// let arr = [10, 20, 30, 40, 50]

// console.log(arr, typeof arr)

// arr[100] = "apple"


// console.log(arr[10])

// for(let t in arr){
//     console.log(t, typeof t)
// }


// console.log(arr["0"])




// let obj = { 
//     "name": "John",
//     age: 30,
//     "first word": "mom",
//     city: "New Delhi"
// }

// console.log(obj)

// let obj = {
//     a: 10 ,
//     "2": "apple",
//     b: 20,
//     "0" : "mango"
// }

// console.log(obj)


// update variable at the place of key in object
// let c = "city"

// let obj = {
//     name: "John",
//     age: 30,
//     // [c]: "New Delhi"
//     [3+5]: "New Delhi"
// }

// console.log(obj) // { name: 'John', age: 30, c: 'New Delhi' }