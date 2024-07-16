let todoContainer = document.querySelector('#todo');

let addTaskBtn = document.querySelector('#addTask');


addTaskBtn.addEventListener("click", ()=>{
    let superCard = document.createElement("div")
    superCard.style.backgroundColor = "lightblue"
    // I want to create a card
     let card =  document.createElement("div")
     card.innerText = "New Task"
    // card.placeholder = "Enter your task"
    // card.type = "text"
     // card.contentEditable = true
    //  card.className = "card"
    card.setAttribute("class" , "card" )
    card.setAttribute("contentEditable" ,true)
     superCard.append(card)

     // closures
    card.addEventListener("click", ()=>{
        //  card.innerText = ""
         console.log(card.innerText)
        if(card.innerText === "New Task"){
            card.innerText = ""
        }
    })

     // focus , blur
    card.addEventListener("blur", ()=>{
        if(card.innerText === ""){
            // card.remove()   // todo:  delete after 20 secs
            superCard.remove()
        }
    })


    // dropdown:

    let dropdown = document.createElement("select")
    dropdown.innerHTML = `
    <option value="todo">ToDo</option>
    <option value="inProgress">Progress</option>
    <option value="done">Done</option>
    `

    superCard.append(dropdown)



    dropdown.addEventListener("change", (eventDetails)=>{
         let userSelection = eventDetails.target.value   // inProgress
         // id of the column we want to move the card to
        //  console.log(userSelection)
        let columnToMove = document.getElementById(userSelection) // Progress column
         
        columnToMove.append(superCard)

    })



    todoContainer.append(superCard)


})