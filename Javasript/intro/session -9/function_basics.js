// Function
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Function Constructor
// 5. Function Invocation
// 6. Function Call
// 7. Function Apply
// 8. Function Bind
// 9. Function Closure
// 10. Function Currying
// 11. Function Memoization
// 12. Function Recursion
// 13. Function Composition
// 14. Function Pure Function
// 15. Function Impure Function

// 1. Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(5, 5)); // 10

// 2. Function Expression
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 5)); // 10

// 3. Arrow Function
// let hello =(){ 
//     console.log('Hello World');
//     return 'hello';}
const add = (a, b) => a + b;
console.log(add(5, 5)); // 10

// 4. Function Constructor
const add = new Function('a', 'b', 'return a + b');

// 5. Function Invocation
function add(a, b) {
    return a + b;
}
console.log(add(5, 5)); // 10

// 6. Function Call
function add(a, b) {
    return a + b;
}
console.log(add.call(null, 5, 5)); // 10

// 7. Function Apply
function add(a, b) {
    return a + b;
}
console.log(add.apply(null, [5, 5])); // 10

// 8. Function Bind
function add(a, b) {
    return a + b;
}
const addFive = add.bind(null, 5);
console.log(addFive(5)); // 10

// 9. Function Closure
function add(a) {
    return function(b) {
        return a + b;
    }
}
const addFive1 = add(5);
console.log(addFive1(5)); // 10

// 10. Function Currying
function add(a) {
    return function(b) {
        return a + b;
    }
}
const addFive2 = add(5);
console.log(addFive2(5)); // 10

// 11. Function Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    }
}
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(5, 5)); // 10

// 12. Function Recursion
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 13. Function Composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const add = x => x + 1;
const multiply = x => x * 2;
const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(5)); // 12

// 14. Function Pure Function
const add = (a, b) => a + b;
console.log(add(5, 5)); // 10

// 15. Function Impure Function
let result = 0;
const add = (a, b) => {
    result = a + b;
    return result;
}
console.log(add(5, 5)); // 10


