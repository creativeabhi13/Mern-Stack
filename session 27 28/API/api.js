import express from 'express';
const app = express();
app.use(express.json());
app.use(cors());

function hello() {
   res.json({message: "Hello World"});
}

function sumOfTwo(req,res) {
    console.log(req.body);
 let num1 = req.body.num1;
    let num2 = req.body.num2;
    console.log(num1);
    console.log(num2);


let sum = num1 + num2;
    console.log(sum);
    res.send(sum.toString());

}