



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
})







deleteAllBtn.addEventListener('click', function(){

    listContainer.textContent = ""
    localStorage.clear()
    choresLists = []
    
})



// Individual Delete Line 
listContainer.addEventListener('click', function(event){
    
    


    const btn = event.target.closest('.individualDeleteBtn-el')
    if(!btn) return
    guardClause.textContent = ""


    const allBtns = listContainer.querySelectorAll('button')

    const btnIndex = [allBtns].indexOf(btn)
    
    if (btnIndex !== -1){
        choresLists.splice(btnIndex, 1)
    }


    const row = btn.closest('.individualLine')


    row.remove()

    localStorage.setItem("choresLists", JSON.stringify(choresLists))
    

    renderAll(choresLists)

    console.log(event.target, btn)
    
})


