let personCollection = document.querySelectorAll('input');
// console.log(personCollection)
let btns = document.querySelectorAll('.roll');
let spanTags = document.querySelectorAll('span'); // <span></span> // score
let winMessage = document.querySelector('#winMessage');
let endButton = document.querySelector('#endButton');

endButton.disabled = true;



// addEventListener

// btns[0].addEventListener()
// btns[1].addEventListener()
// btns[2].addEventListener()
// btns[3].addEventListener()
// btns[4].addEventListener()


for(let t of btns){
    t.addEventListener("click",rollTheDice)
}

// function addEventListener(event, fun1){
//      rollTheDice(eventDetails)
// }


let clicks = 0;

function rollTheDice(eventDetails){
    clicks++; 
    if(clicks == 5){
        endButton.disabled = false;
    }
    console.log("roll the dice is working...")
    // console.log(eventDetails.target);
    // console.log('Rolling the dice');
    let  clickedButton = eventDetails.target; // <button id="btn2">Roll the dice</button>
    clickedButton.disabled = true;
    let clickBtnId = clickedButton.id[3] - 1; // btn2 => 2

    // dice=> 1-6
    let diceArray = [1,2,3,4,5,6];
    let randomIndex = parseInt(Math.random()*diceArray.length); // 0-5
    let diceValue = diceArray[randomIndex]; // 3 => 4

    console.log(diceValue);

    spanTags[clickBtnId].innerText = diceValue

    // display the value in span Tag:
}


// let arr = [10,20,30,40,50,60,70,80,90,100];

// arr.map(caluclate)

// function map(fun1){
//     fun1(v,i)
// }

// function caluclate(value, index){

// }


endButton.addEventListener("click", endGame)


function endGame(){
    // console.log("Game is over")
    let highestScore = 0
    for(let t of spanTags){
        // console.log(t.innerText)
        let userScore = t.innerText
        if(userScore > highestScore){
            highestScore = userScore
        }
    }
    console.log(highestScore)

    // get name of all people who got highest score:


         // get index of score who have highest score 
         let highestScoreIndex = []
         let highestScoreNames = []
         for(let i = 0; i<=spanTags.length-1; i++){
             let userScore = spanTags[i].innerText
             if(userScore == highestScore){
                 // index:  user 1, user 2
                //  highestScoreIndex.push(i)
                // console.log(personCollection[i].value)
                highestScoreNames.push(personCollection[i].value)
             }
        }
        // console.log(highestScoreNames)
        // highestScoreNames.join()
       winMessage.innerText = `Winner is ${highestScoreNames.join()} with score ${highestScore}`
            // winMessage.style.color = "red"
            // winMessage.style.backgroundColor = "yellow"
            // winMessage.style.fontSize = "30px"
            // winMessage.style.fontWeight = "bold"
            // winMessage.style.border = "2px solid black"
            if(highestScoreNames.length == 1){
                winMessage.className = "win1"
            }
            else{
                winMessage.className = "win2"
            }

           

}



// names = ["A","B","C","D","E"]
// scores = [10,20,20,10,20]