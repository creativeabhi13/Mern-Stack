// console.log("A");


// for(let i=1;i<10000000;i++)
// {

// }
// console.log("B");
// console.log("C");

console.log("A");
setTimeout(() => {
    console.log("B");
}, 2000);
setTimeout(() => {
    console.log("C");
},4000);


// pizza order 
// 1. prepare dough
// 2. prepare sauce
// 3. prepare toppings
// 4. bake pizza
// 5. deliver pizza
// 6. eat pizza

async function prepareDough() {
    console.log("Preparing dough");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done preparing dough");
            resolve("Dough prepared");
        }, 2000);

    });
}

async function prepareSauce() {
    console.log("Preparing sauce");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done preparing sauce");
            resolve("Sauce prepared");
        }, 2000);

    });
}

async function prepareToppings() {
    console.log("Preparing toppings");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done preparing toppings");
            resolve("Toppings prepared");
        }, 2000);

    });
}

async function bakePizza() {
    console.log("Baking pizza");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done baking pizza");
            resolve("Pizza baked");
        }, 2000);

    });
}

async function deliverPizza() {
    console.log("Delivering pizza");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done delivering pizza");
            resolve("Pizza delivered");
        }, 2000);

    });
}

async function eatPizza() {
    console.log("Eating pizza");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done eating pizza");
            resolve("Pizza eaten");
        }, 2000);

    });
}

async function makePizza() {
    const dough = await prepareDough();
    console.log(dough);
    const sauce = await prepareSauce();
    console.log(sauce);
    const toppings = await prepareToppings();
    console.log(toppings);
    const pizza = await bakePizza();
    console.log(pizza);
    const deliveredPizza = await deliverPizza();
    console.log(deliveredPizza);
    const eatenPizza = await eatPizza();
    console.log(eatenPizza);
}

makePizza();