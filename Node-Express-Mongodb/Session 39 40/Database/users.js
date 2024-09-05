const arr = [
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "bret@gmail.com",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",    
    "email": "ervin@gmail.com",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
}
]
// one to one relationship between users and posts
// write two models one is users and one is employee and create a relationship between them

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    website: String,
    company: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const employeeSchema = new Schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    website: String,
    company: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;



// how to connect users and employee model

const mongoose = require('mongoose');
const User = require('./users');
const Employee = require('./employee');

mongoose.connect('mongodb://localhost:27017/relationship', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongodb connected");
    })
    .catch(err => {
        console.log("Mongodb connection error", err);
    });

const createUsers = async () => {
    const user = new User({
        name: "Leanne Graham",
        email: "",
    });
    await user.save();
}
    

createUsers();

const createEmployee = async () => {
    const employee = new Employee({
        name: "Ervin Howell",
        email: "",
    });
await employee.save();
}
 // one to one relationship between users and posts
// one to many relationship between users and posts

// one to one with reference relationship between users and orders
// one to many with reference relationship between users and orders 

// one to many with reference relationship between users and posts 