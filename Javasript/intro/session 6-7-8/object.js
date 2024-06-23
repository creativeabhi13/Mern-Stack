// objects 
// 1. object literal
// 2. object constructor
// 3. object.create
// 4. object prototype

// 1. object literal
let obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj['name']);
console.log(obj['age']);
console.log(obj['city']);

// 2. object constructor
let person = new Object();
person.name = 'John';
person.age = 30;
person.city = 'New York';
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person['name']);
console.log(person['age']);
console.log(person['city']);

// 3. object.create
let obj1 = Object.create(null);
obj1.name = 'John';
obj1.age = 30;
obj1.city = 'New York';
console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.city);
console.log(obj1['name']);
console.log(obj1['age']);
console.log(obj1['city']);

// 4. object prototype
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
let person1 = new Person('John', 30, 'New York');
console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.city);
console.log(person1['name']);
console.log(person1['age']);
console.log(person1['city']);


// object methods 
// 1. object literal
let obj2 = {
    name: 'John',
    age: 30,
    city: 'New York',
    getDetails: function() {
        return this.name + ' ' + this.age + ' ' + this.city;
    }
};
console.log(obj2.getDetails());

// 2. object constructor
let person2 = new Object();
person2.name = 'John';
person2.age = 30;
person2.city = 'New York';
person2.getDetails = function() {
    return this.name + ' ' + this.age + ' ' + this.city;
};
console.log(person2.getDetails());

// 3. object.create
let obj3 = Object.create(null);
obj3.name = 'John';
obj3.age = 30;
obj3.city = 'New York';
obj3.getDetails = function() {
    return this.name + ' ' + this.age + ' ' + this.city;
};
console.log(obj3.getDetails());

// 4. object prototype
function Person1(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

Person1.prototype.getDetails = function() {
    return this.name + ' ' + this.age + ' ' + this.city;
}

let person3 = new Person1('John', 30, 'New York');
console.log(person3.getDetails());

// object add, update, delete
// 1. object literal
let obj4 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(obj4);

// add
obj4.country = 'USA';
console.log(obj4);

// update
obj4.city = 'Washington';
console.log(obj4);

// delete
delete obj4.age;
console.log(obj4);

// 2. object constructor
let person4 = new Object();
person4.name = 'John';
person4.age = 30;
person4.city = 'New York';
console.log(person4);

// add
person4.country = 'USA';
console.log(person4);

// update
person4.city = 'Washington';
console.log(person4);

// delete
delete person4.age;
console.log(person4);

// 3. object.create
let obj5 = Object.create(null);
obj5.name = 'John';
obj5.age = 30;
obj5.city = 'New York';

console.log(obj5);

// add
obj5.country = 'USA';
console.log(obj5);


// update
obj5.city = 'Washington';
console.log(obj5);

// delete
delete obj5.age;
console.log(obj5);

// 4. object prototype
function Person2(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person5 = new Person2('John', 30, 'New York');
console.log(person5);

// add
person5.country = 'USA';
console.log(person5);

// update
person5.city = 'Washington';
console.log(person5);

// delete
delete person5.age;
console.log(person5);

// object iteration
// 1. object literal
let obj6 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in obj6) {
    console.log(key + ' : ' + obj6[key]);
}

// object priority with data type
let obj7 = {
    1: 'John',
    2: 30,
    3: 'New York'
};
for (let key in obj7) {
    console.log(key + ' : ' + obj7[key]);
}

let obj8={
    "name":"John",
    10:"apple",
    "age":30,
    2:"true",
    "city":"New York",
    "truw":"banana"

};
for(let key in obj8){
    console.log(key+" : "+obj8[key]);
    console.log(typeof key);
}

// check data type of key in an object
let obj9 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in obj9) {
    console.log(typeof key);
}

// all the keys of an object in an array and object are string 
// every key is converted to string
let obj10 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(Object.keys(obj10));


