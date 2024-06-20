
// SQUARE THE ARRAY ELEMENTS
let arr=[10,20,30,40,50,];
for(val of arr){
    console.log(val*val);

}

// square of array elements and update the array
let newArr=[];
   for(let i=0;i<arr.length;i++){
       newArr[i]=arr[i]*arr[i];
   }
   console.log(newArr);

   // sum the two array with same index
    let arr1=[10,20,30,40,50];
    let arr2=[1,2,3,4,5];
    let arr3=[];
    for(let i=0;i<arr1.length;i++){
        arr3[i]=arr1[i]+arr2[i];
    }
    console.log(arr3);

    // delete the 3rd index element from array
    let arr4=[10,20,30,40,50,60,70,80,90,100];
let newArr4=[];
for(let i=0;i<arr4.length;i++){
    if(i!=4){
        newArr4.push(arr4[i]);
    }
}
console.log(newArr4);

// add apple in between 5 and 6 th index

let arr5=[10,20,30,40,50,60,70,80,90,100];
let newArr5=[];
for(let i=0;i<arr5.length;i++){
    if(i<5){
        newArr5.push(arr5[i]);
    }else if(i==5){
        newArr5.push("apple");
    }else{
        newArr5.push(arr5[i]);
    }
}
console.log(newArr5);


// check the element array is vowel or not using index of
let arr6=["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
let arr7=["a","e","i","o","u"];
let newArr6=[];

for(let i=0;i<arr6.length;i++){
    if(arr7.indexOf(arr6[i])!=-1){
        newArr6.push(arr6[i]);
    }
}
console.log(newArr6);
