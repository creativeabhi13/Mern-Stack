// for-loop & while-loop
// for (initialization; condition; increment/decrement) { code block }
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// i=0
// condition =>     0<10 => true
// code block => console.log(0) =>0
// increment => i++ => i=1

// i=1
// condition =>     1<10 => true
// code block => console.log(1) =>1
// increment => i++ => i=2

// i=2
// condition =>     2<10 => true
// code block => console.log(2) =>2
// increment => i++ => i=3

// i=3
// condition =>     3<10 => true
// code block => console.log(3) =>3
// increment => i++ => i=4

// i=4
// condition =>     4<10 => true
// code block => console.log(4) =>4
// increment => i++ => i=5

// i=5
// condition =>     5<10 => false
// come out of the loop

// while (condition) { code block }
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}