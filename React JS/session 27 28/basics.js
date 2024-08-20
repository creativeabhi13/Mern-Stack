// console.log("A");
// for(let i = 0; i < 5; i++) {
//     console.log("B");
// }
// console.log("C");

// setTimeout()
setTimeout(()=>{
    console.log("A");
},2000);

console.log("B");

setTimeout(()=>{
    console.log("C");

},3000);

console.log("D");

setTimeout(()=>{
    console.log("E");

}   ,4000);