



let choresLists = []
const inputChoresList = document.getElementById("choresInput") 
    



const addBtn = document.getElementById("addBtn-el")
const deleteAllBtn = document.getElementById("deleteAllBtn-el")
const listContainer = document.getElementById("listContainer")
const guardClause = document.querySelector(".guardClause")






// So it shows visually looping through the array through forEach method
function renderAll(arr){
    listContainer.textContent = ""
    arr.forEach(renderRow)
}   

//UI
function renderRow(item){


   const individualLineDIV = document.createElement("div")
    individualLineDIV.classList.add("individualLine")  


    const span = document.createElement("span")
    span.classList.add("choresItems")
    span.textContent = item


    const button = document.createElement("button")
    button.classList.add("individualDeleteBtn-el")
    button.textContent = "✕"

    individualLineDIV.append(span, button)
   
    listContainer.append(individualLineDIV)

}



function addChores(){

   if(!inputChoresList.value){
    guardClause.textContent = "Please Input a Value"
    inputChoresList.focus()
    return
   }
    
   choresLists.push(inputChoresList.value)
   localStorage.setItem("choresLists", JSON.stringify(choresLists))

    
   renderRow(inputChoresList.value)   
   inputChoresList.value = ""
    guardClause.textContent = ""

    console.log(choresLists)

}





inputChoresList.addEventListener('keydown', function(event){


    if(event.key === 'Enter'){
        
        addChores() 
        
}
    
})


addBtn.addEventListener('click', function(){
    addChores()

})



document.addEventListener("DOMContentLoaded", () => {
    const saved = JSON.parse(localStorage.getItem("choresLists") || "[]")
    choresLists = saved
    

    renderAll(choresLists)

    console.log(choresLists)
})







deleteAllBtn.addEventListener('click', function(){

    listContainer.textContent = ""
    localStorage.clear()
    choresLists = []
    

    console.log(choresLists)
})



// Individual Delete Line 
listContainer.addEventListener('click', function(event){
    

    const btn = event.target.closest('.individualDeleteBtn-el')
    const row = btn.closest('.individualLine')
    if(!btn) return;
    guardClause.textContent = ""

    // selecting all the buttons currently showing on the DOM

    const allBtns = listContainer.querySelectorAll("button")

    // getting the index of the clicked button
    const btnIndex = [...allBtns].indexOf(btn)

    // displaying the list before deletion of the current item

    if(btnIndex !== -1){
        choresLists.splice(btnIndex, 1);
        // displaying the list after deletion

    console.log(choresLists)
    }

    localStorage.setItem("choresLists", JSON.stringify(choresLists))


    row.remove()

    renderAll(choresLists)
    
})



