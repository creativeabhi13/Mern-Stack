let bill_box= document.querySelector("input");
let btn = document.querySelector("button");
let outputBox = document.querySelector(".output");


// events in javascript (click, mouseover, mouseout, keyup, keydown, keypress)
// function handleClick(){
//     console.log("button clicked");
//     console.log(bill_box.value);
//     let tip = bill_box.value*0.15;
//     // output.innerText=bill_box.value+tip;
//     console.log(tip);
//     // console.log(output.innerText);
//     outputBox.innerHTML=`Tip amount is : ${tip}`;
// }

// addEventListener if we have not used onClick in html
btn.addEventListener('click',handleClick);
btn.addEventListener('onClick',handleClick);

function handleClick(){
    console.log("button clicked");
    console.log(bill_box.value);
    let tip = bill_box.value*0.15;
    // output.innerText=bill_box.value+tip;
    console.log(tip);
    // console.log(output.innerText);
    outputBox.innerHTML=`Tip amount is : ${tip}`;
}