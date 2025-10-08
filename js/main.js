const inputChoresList = document.getElementById("choresInput")
const addBtn = document.getElementById("addBtn-el")
const deleteAllBtn = document.getElementById("deleteAllBtn-el")
const listContainer = document.getElementById("listContainer")




 
    




function addChores (){
   const div = document.createElement("div")
  div.classList.add("individualLine")  


    const span = document.createElement("span")
    span.id = "choresItems"
    span.textContent = inputChoresList.value



    const button = document.createElement("button")
    button.id = "individualDeleteBtn-el"
    button.textContent = "✕"



    div.append(span, button)
   
    listContainer.append(div)
}




inputChoresList.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
        addChores()
    }

})