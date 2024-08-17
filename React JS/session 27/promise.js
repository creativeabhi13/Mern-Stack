// setTimeout(()=>{
//     console.log("Hey lets download an image")
// },1000)

// console.log("About Images")

// code => happening

// let promise1 = new Promise((resolve,reject)=>{
//     console.log("Pizza is ordered")
//     setTimeout(()=>{
//         resolve("done "),1000})

// }
// );

// promise1.then((result)=>{
// console.log(result);
// })

// promise1.catch((error)=>{
// console.log(error);
// })

let promise2 = new Promise((resolve,reject)=>{
    console.log("Pizza is ordered")
    setTimeout(()=>{
        reject("done "),1000})
    resolve();
}
);

promise2.then((result)=>{
    console.log(result);
    })
    
    promise2.catch((error)=>{
    console.log(error);
    })

// state of promise
// State of promise
// pending => initial state neither fulfilled nor rejected result : undefined
// fulfilled => success result : value
// rejected => failure result : error

