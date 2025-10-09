const inputChoresList = document.getElementById("choresInput")
const addBtn = document.getElementById("addBtn-el")
const deleteAllBtn = document.getElementById("deleteAllBtn-el")
const listContainer = document.getElementById("listContainer")



function addChores (){
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

    listContainer.innerHTML = ""
})


listContainer.addEventListener('click', function(event){
    /* const btn = event.target.closest('.individualDeleteBtn-el')
    if(!btn) return */

    

    const row = btn.closest('.individualLine')
    console.log(row)

    row.remove()
    
})


