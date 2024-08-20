

// function hiGreetApi() {
//    fetch('http://localhost:5000/greet')
//     .then(res => console.log(res,typeof res))
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
   
// }
// hiGreetApi();

function hiGreetApi(){
    fetch('http://localhost:5000/greet'),{
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body :JSON.stringify ({
            num1 : 10,
            num2 : 20
        })
    }
    .then(res => console.log(res))
    .then(data => console.log(data))
    .catch(error => console.log(error));
}