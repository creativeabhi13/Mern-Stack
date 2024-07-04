// inbuilt
// map,forEach,filter,reduce,find,sort()
// only work with array

// Map
// it will return new array
// it will not change the original array
// it will not work with object
// it will work with array
// it will work with array of object
// it will work with array of array
// it will work with array of array of object

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let newArr=[];

// normal way
// for(t of arr){
//     newArr.push(t*t);
// }
// console.log(newArr);

// let arr=[10,20,30,40,50];

// arr.map((value,index,array)=>{
//     console.log(value*value);   
// });

// let Arr=[];
// function square(value,index,array){
//     console.log(value,index,array);
//     console.log(value*value);
// }


// let arr=[2,4,6,8,10];

// let x=arr.map((value,index,array)=>{
//     return value*value;
// }
// );
// console.log(x);

// let arr=[10,21,30,45,55];

// let x=arr.map((val,index,arr)=>{
//     return val%2==0;
// })
// console.log(x); // [true,false,true,false,false]


// let arr=[12,23,34,45,56,];

// let x=arr.map((val,index,arr)=>{
//     if(val%2==0){
//         return "even";
//     }
// })

// console.log(x) // ["even",undefined,"even",undefined,"even"]

// forEach
// it will not return anything
// it will not change the original array
// it is similar to map but it will not return anything

// let arr=[10,20,30,40,50];

// arr.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// });


// filter

// it will return new array
// it will not change the original array
// it will work with array
// it will work with array of object
// it will work with array of array
// it will work with array of array of object

// let arr=[10,21,30,43,50];

// let x=arr.filter((val,index,arr)=>{
//  return  val%2==0;
// });

// console.log(x);


// reduce

// it will return single value
// it will not change the original array
// it will work with array


let arr=[10,20,30,40,50];

let x=arr.reduce((sum,val,index,arr)=>{
    return sum+val;
}
);
console.log(x);

// flat 
// it will return new array
// it will not change the original array

// let arr1=[10,[20,30],40,[50,60,70],80];  
// console.log(arr1);
// arr1.flat();
// console.log(arr1);
// let x1=arr1.flat();
// console.log(x1);

// reduce 

// normal way 
// let newArr=[];
// for(let t of arr1) {
//     // console.log(t, typeof t);
//     // newArr.push(t);

// if(typeof(t)=="number"){ // 10,40,80
//     newArr.push(t);
// }else if(Array.isArray(t)){ // [20,30]
//     for(let x of t){
//         newArr.push(x);
//     }
// }
// console.log(newArr);    // [10,20,30,40,50,60,70,80]
// }


// [10,[20,30],40,[50,60,70],80]

// Q1 using reduce appproach
// let arr1=[10,[20,30],40,[50,60,70],80];  
// let x1=arr1.reduce((flatArray,value,index,arr)=>{
// if(typeof(value)=='number'){
// return [...flatArray,value];
// }
// else if(typeof(value)=='object'){
//     // for(let z of value){
//     //    return [...flatArray,z];
//     // }
//     return [...flatArray,...value];

// }
// },[])

// console.log(x1);


// q2 :
let users= [
    {id:1,name:'john',city:"delhi"},
    {id:2,name:'mike',city:"mumbai"},
    {id:3,name:'smith',city:"delhi"},
    {id:4,name:'jones',city:"mumbai"},
    {id:5,name:'jones',city:"delhi"},
    {id:6,name:'jones',city:"cheenai"},
    {id:7,name:'jones',city:"delhi"},
    {id:8,name:'jones',city:"mumbai"},
    {id:9,name:'jones',city:"delhi"},
]

// group people based on city
// output
// {
//     delhi:[{},{},{}],
//     mumbai:[{},{},{}],
//     cheenai:[{},{},{}]
// }

let x2=users.reduce((groupUsers,users,index,arr)=>{
let city=users.city;
if(groupUsers[city]){
    groupUsers[city].push(users);
}
else{
    groupUsers[city]=[users];
}
return groupUsers;
})
console.log(x2);

// q3.
let arr3=[10,20,10,20,30,10,20,30,40,10];
// output
// {
//     10:4,
//     20:3,
//     30:2,
//     40:1
// }

let x3=arr3.reduce((count,value,index,arr)=>{
    if(count[value]){
        count[value]++;
    }
    else{
        count[value]=1;
    }
    return count;
},{})
console.log(x3);
