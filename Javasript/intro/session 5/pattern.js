// * * * * *
// * * * * *
// * * * * *
// * * * * *

for(let line=1;line<=4;line++){
    let str=""
    for(let star=1;star<=5;star++){
        str=str+"*"+" "
    }
    console.log(str);
}

// line 1 => star 1 => ***** 
// line 2 => star 2 => *****
// line 3 => star 3 => ****
// line 4 => star 4 => ***

// * 
// * *
// * * *
// * * * *
// * * * * *
for(let line=1;line<=5;line++){
    let str=""
    for(let star=1;star<=line;star++){
        str=str+"*"+" "
    }
    console.log(str);
}

// line 1 => star 1 => *
// line 2 => star 2 => **
// line 3 => star 3 => ***
// line 4 => star 4 => ****
// line 5 => star 5 => *****

// *
// ***
// *****
// *******
// *********
for(let line=1;line<=5;line++){
    let str=""
    for(let star=1;star<=line;star=star+2){
        str=str+"*"+" "
    }   
    console.log(str);
}