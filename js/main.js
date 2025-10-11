


let choresLists = []
const inputChoresList = document.getElementById("choresInput") 
    



const addBtn = document.getElementById("addBtn-el")
const deleteAllBtn = document.getElementById("deleteAllBtn-el")
const listContainer = document.getElementById("listContainer")
const guardClause = document.querySelector(".guardClause")


let choresFromLocalStorage = JSON.parse(localStorage.getItem("choresLists"))


if(choresFromLocalStorage){
    choresLists = choresFromLocalStorage
}


function renderRow(item){
 

    choresLists.push(item)
   localStorage.setItem("choresLists", JSON.stringify(choresLists))
    console.log(choresLists)
   


   const individualLineDIV = document.createElement("div")
    individualLineDIV.classList.add("individualLine")  



    const span = document.createElement("span")
    span.classList.add("choresItems")
    span.textContent = inputChoresList.value



    const button = document.createElement("button")
    button.classList.add("individualDeleteBtn-el")
    button.textContent = "✕"

    individualLineDIV.append(span, button)
   
    listContainer.append(individualLineDIV)

    inputChoresList.value = ""
   guardClause.textContent = ""
}



function addChores (){

    

   if(!inputChoresList.value){
    
     

    guardClause.textContent = "Please Input a Value"

    console.log(guardClause)
    inputChoresList.focus()
    return
   }
    
   renderRow(inputChoresList.value)
}











inputChoresList.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
        addChores() 



    }
})


addBtn.addEventListener('click', function(){
    addChores()

})







deleteAllBtn.addEventListener('click', function(){

    listContainer.textContent = ""
    localStorage.clear()
    choresLists = []
    
})




listContainer.addEventListener('click', function(event){
    
    
    const btn = event.target.closest('.individualDeleteBtn-el')
    if(!btn) return

    

    const row = btn.closest('.individualLine')
    
    row.remove()

    guardClause.textContent = ""

    
    
})


