let deletecontant=document.getElementById("deletecontant")
let deleteInput=document.getElementById("deleteInput")
let deleteBtn=document.getElementById("deleteBtn")

deleteInput.addEventListener("keyup", ()=>{
    if (deleteInput.value=="Delete") {
        deleteBtn.removeAttribute("disabled")
    }
    else{
        deleteBtn.setAttribute("disabled",true)
    }
})

deleteBtn.addEventListener("click",()=>{
    deletecontant.style.display=("none")
    deleteInput.value=""

})
