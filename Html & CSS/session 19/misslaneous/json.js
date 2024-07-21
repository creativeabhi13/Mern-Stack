
let info1 = {
    a : 10, 
    b : 'hello',
    c : true,
    d: ['a', 'b', 'c'],
    e: {
        p: 10,
        q: 20
    },
}

console.log(info1);


// json: JavaScript Object Notation

// all strings should be in double quotes 
// keys should be in double quotes
// last key-value pair should not have a comma

let jsonInfo1 = JSON.stringify(info1)

console.log(jsonInfo1, typeof jsonInfo1);


// console.log(jsonInfo1[0])


// convert json back to JS data type: 


let info2 = JSON.parse(jsonInfo1);

console.log(info2, typeof info2);

