// Array
// 1. Create an array
// 10 20 30 40 50
    // let a=10;
    // let b=20;
    // let c=30;
    // let d=40;
    // let e=50;
    // let arr=[a,b,c,d,e];
    // console.log(arr);

    // let arr=[10,20,30,40,50,"litchi"];
    // console.log(arr,typeof arr,arr.length);

    // // index: 0 to n-1
    // // 10
    // console.log(arr[0]);
    // console.log(arr[5]);
    // 50

    // let arr=["apple", "banana", "cherry", "dates", "elderberry", "fig", "grape","honeydew"];
    // console.log(arr);
    // console.log(arr.length);
    // console.log(arr.length-1);
    // console.log(arr[arr.length-2]);

    // let arr=[10,20,30,40,50,60,70,80,90,100];
    // arr[0]=100;
    // console.log(arr);

    // loops in array
     let arr=[10,20,30,40,50,60,70,80,90,100];

     // for while loop
     for(let i=0;i<arr.length-1;i++){
         console.log(i,arr[i]);
     }
    
// for of loop
// for value of array
for(let val of arr){
    console.log(val);
}

// for in loop
// for index of array
for(let index in arr){
    console.log(index, arr[index]);
}

// insert and delete the element in array
// push and pop
// unshift and shift
// splice
// slice
// concat
// join
// split
// reverse
// sort
// indexOf
// lastIndexOf
// includes
// find
// findIndex
// filter
// map
// reduce
// some
// every
// forEach
// fill
// copyWithin
// flat
// flatMap
// keys
// values

 let a=[10,20,30,40,50,60,70,80,90,100];
    console.log(a);
    // push
    console.log("push");
    a.push(110);
    console.log(a);
    // pop
    console.log("pop");
    a.pop();
    console.log(a);

    // unshift
    console.log("unshift");
    a.unshift(5);

    console.log(a);
    // shift
    console.log("shift");
    a.shift();

    console.log(a);


    // splice
    console.log("splice");
    a.splice(2,0,25,35,45);
    console.log(a);
    a.splice(2,3);
    console.log(a);
    a.splice(2,3,25,35,45);
    console.log(a);
    a.splice(2,3,25,35,45,55,65,75);
    console.log(a);
    a.splice(2,3,25,35,45,55,65,75,85,95);
    console.log(a);
    // slice
    console.log("slice");
    let b=a.slice(2,5);
    console.log(a);
    console.log(b);
    // concat
    console.log("concat");
    let c=a.concat(b);
    console.log(a);
    console.log(b);
    console.log(c);
    // join
    console.log("join");
    let d=a.join(" ");
    console.log(a);
    console.log(d);
    // split
    console.log("split");
    let e=d.split(" ");
    console.log(d);
    console.log(e);
    // reverse
    console.log("reverse");
    a.reverse();
    console.log(a);
    // sort
    console.log("sort");
    a.sort();
    console.log(a);
    // indexOf
    console.log("index of")
    let f=a.indexOf(35);
    console.log(a);
    console.log(f);
    // lastIndexOf
    console.log("last index of")
    let g=a.lastIndexOf(35);
    console.log(a);
    console.log(g);
    // includes
    console.log("includes")
    let h=a.includes(35);
    console.log(a);
    console.log(h);
    // find
    console.log("find")
    let i=a.find((val)=>val>50);
    console.log(a);
    console.log(i);
    // findIndex
    console.log("find index")
    let j=a.findIndex((val)=>val>50);
    console.log(a);
    console.log(j);
    // filter
    console.log("filter")
    let k=a.filter((val)=>val>50);
    console.log(a);
    console.log(k);
    // map
    console.log("map")
    let l=a.map((val)=>val*val);
    console.log(a);
    console.log(l);
    // reduce
    console.log("reduce")
    let m=a.reduce((acc,val)=>acc+val);
    console.log(a);
    console.log(m);
    // some
    console.log("some")
    let n=a.some((val)=>val>50);
    console.log(a);
    console.log(n);
    // every
    console.log("every")
    let o=a.every((val)=>val>50);
    console.log(a);
    console.log(o);
    // forEach
    console.log("for each")
    a.forEach((val)=>console.log(val));
    // fill
    console.log("fill")
    a.fill(0);
    console.log(a);
    // copyWithin
    console.log("copy within")
    a.copyWithin(2,5,7);
    console.log(a);
    // flat
    console.log("flat")
    let p=[10,20,[30,40,50],60,70,[80,90,100]];
    let q=p.flat();
    console.log(p);
    console.log(q);
    // flatMap
    console.log("flat map")
    let r=[10,20,30,40,50];
    let s=r.flatMap((val)=>[val,val*val]);
    console.log(r);
    console.log(s);
    // keys
    console.log("keys")
    let t=a.keys();
    console.log(a);
    console.log(t);
    // values
    console.log("values")
    let u=a.values();
    console.log(a);
    console.log(u);
    // entries
    console.log("entries")
    let v=a.entries();
    console.log(a);
    console.log(v);
    // Array.isArray
    console.log("is array")
    let w=Array.isArray(a);
    console.log(a);
    console.log(w);
    // Array.of
    console.log("of")
    let x=Array.of(10,20,30,40,50);
    console.log(x);
    // Array.from
    console.log("from")
    let y=Array.from("hello");
    console.log(y);
    // Array.prototype
    console.log("prototype")
    let z=Array.prototype;
    console.log(z);
