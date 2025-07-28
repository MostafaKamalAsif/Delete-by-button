let deletecontant = document.getElementById("deletecontant");
let deleteInput = document.getElementById("deleteInput");
let deleteBtn = document.getElementById("deleteBtn");

// Handle input change
deleteInput.addEventListener("keyup", () => {
  if (deleteInput.value === "Delete" || deleteInput.value === "delete" ) {
    deleteBtn.removeAttribute("disabled");
    deleteBtn.style.backgroundColor = "#3B82F6";
    deleteBtn.style.color = "white";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.opacity = "1";
  } else {
    deleteBtn.setAttribute("disabled", true);
   
  }
});

// Handle delete button click
deleteBtn.addEventListener("click", () => {
  deletecontant.style.display = "none";
  deleteInput.value = "";
  
    deleteBtn.style.backgroundColor = "black";
    deleteBtn.style.color = "white";
    deleteBtn.style.cursor = "not-allowed";
    deleteBtn.style.opacity = "0.6";

});
