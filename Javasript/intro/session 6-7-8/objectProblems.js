// 1. let student ={name :"Abhishek",age:21,city:"New Delhi",courses:["Maths","Science","Physics"]}.
// from the course array remove physics and add chemistry

// let student ={
//     name :"Abhishek",
//     age:21,
//     city:"New Delhi",
//     courses:["Maths","Science","Physics"]
// }
// let arr=student.courses // courses => [Maths,Science,Physics]
// arr.pop() // courses => [Maths,Science]
// arr.push('Chemistry') // courses => [Maths,Science,Chemistry]
// console.log(student.courses)
// console.log(student)

// let ar1=[1,2,3,4,5]
// // copy of the array
// let ar2=[...ar1]
// console.log(ar2)
// ar2.pop()   
// console.log(ar1) // [1,2,3,4,5]
// console.log(ar2) // [1,2,3,4]

// 2. let library = { name: "City Library", address: "123 Main St", books: [ { title: "1984", author: "George Orwell" },
 // { title: "To Kill a Mockingbird", author: "Harper Lee" } ] };

// print the book whosse author is "George Orwell"

let library = {
    name: "City Library",
    address: "123 Main St",
    books: [
        {
            title: "1984",
            author: "George Orwell"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        }
    
    ]
    }
for (let book of library.books) {
    if (book.author === "George Orwell") {
        console.log(book.title)
    }
}

