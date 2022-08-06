document.getElementById("campo").addEventListener("click",function(e) { 
newScreen()
})
document.getElementById("terca").addEventListener("click", function(e) { 
newScreen()
});
document.getElementById("sabado").addEventListener("click", function(e) { 
    newScreen()
})


function newScreen() { 
    document.querySelector(".mainContainer").classList.add("nothing")
    document.querySelector(".calcContainer").classList.add("calculator")
}
