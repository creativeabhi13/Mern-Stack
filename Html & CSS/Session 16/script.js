// querySelector, querySelectorAll, 

// const head1= document.querySelector('h1');
// console.log(head1);
// console.log("-------------------");
// const head2= document.querySelectorAll('h1');
// console.log(head2);
// select attribute of an element

// select by id, class, tag, attribute
// console.log("-------------------");
// const head1= document.querySelector('h1');
// console.log(head1);
// console.log(head1.id,head1.className);

console.log("-------------------");
// modify the element by id and class
// head1.id='newId';
// console.log(head1);
// console.log("-------------------");
// head1.className='blue';
// console.log(head1);

// modify the text of an element (innerHTML, textContent, innerText)
// const head1= document.querySelector('h1');
// console.log(head1.innerText);
// console.log("-------------------");
// head1.innerHTML='This is a new heading';
// console.log(head1.innerText);

// let section = document.querySelector("div");
// console.log(section);
// console.log("-------------------");
// console.log(section.innerText);
// section.innerText="welcome to hello world";
// console.log(section.innerText);
// console.log("-------------------");
// console.log(section.innerHTML);
// section.innerHTML="<h1>hello world</h1> <p>hello world</p>";
// console.log(section.innerHTML);

// search elemeent inside div
let section = document.querySelector("div");
console.log(section);
let section1= section.querySelector("h1");
console.log(section1.innerText,section1.innerHTML);

let emelement = document.querySelector(".red");
console.log(emelement);

let inp= document.querySelector("input");
console.log(inp.value);


