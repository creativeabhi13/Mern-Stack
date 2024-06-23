// how to access science from obj

let obj = {
    name: "Abhishek",
    subjects: ["Maths", "Science", "English"],
    grades: {
        Maths: "A",
        Science: "B",
        English: "C"
    }
}
// both are correct
console.log(obj.subjects['1']) // science
console.log(obj['subjects']['2']) // english

// how to access maths
console.log(obj['grades']['Maths']) // maths
console.log(obj.grades['Maths']) // maths

//find the sum of all the values in the object
let obj1 = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}
let sum = 0
for(let key in obj1){
    sum += obj1[key]
}
console.log(sum) // 150

let allkeys=Object.keys(obj1)
let allvalues=Object.values(obj1)
console.log(allkeys) // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(allvalues) // [ 10, 20, 30, 40, 50 ]

// create an object with 3 objects inside it
let resume = {}

let personalDetails = {
    name: "John",
    age: 30,
    city: "New Delhi",
    country: "India"
}
for(let k in personalDetails){
    // // console.log(k, personalDetails[k])
    // let newKey = k
    // let newValue = personalDetails[k]
    // resume[newKey] = newValue
    // resume["name"] = "John"
    // resume["age"] = 30
    // resume["city"] = "New Delhi"
    // resume["country"] = "India"

    resume[k] = personalDetails[k]
}

let medicalDetails = {
    bloodGroup: "O+",
    weight: 70,
    height: 5.8
}
for(let k in medicalDetails){
    resume[k] = medicalDetails[k]
}

let workHistory = {
    company: "ABC",
    experience: 5,
    role: "Software Developer"
}

for (let k in workHistory){
    resume[k] = workHistory[k]
}
// all the details in one object


console.log(resume) // { name: 'John', age: 30, city: 'New Delhi', country: 'India' }
