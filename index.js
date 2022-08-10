//Login Acess

//Lucas Login

const lucas = { 
    email: "Lucas.hmds@outlook.com",
    password: 12345,
}

// Tiago login
const tiago = { 
    email: "TiagoMarques@outlook.com",
    password: 12345,
}

const accounts = [lucas, tiago]
console.log(accounts)

//E-mail Input 
    const email = document.querySelector("#floatingInput").value
    console.log(email.toLowerCase())

//PassWord Input
const passWordValue = document.querySelector("#floatingPassword").value

//Looping over accounts

// accounts.forEach((eachAccount)=> { 
//     console.log(eachAccount.email.toLowerCase())
// })

const currentAccount = accounts.find(mov => mov.email.toLowerCase() == email.toLowerCase());
console.log(currentAccount)
// Creating Functions

document.getElementById("campo").addEventListener("click",function(e) { 
newScreen()
})
document.getElementById("terca").addEventListener("click", function(e) { 
newScreen()
});
document.getElementById("sabado").addEventListener("click", function(e) { 
    newScreen()
})
document.querySelector(".backMain").addEventListener("click", function() { 
    screenBack()
})

function newScreen() { 
    document.querySelector(".mainContainer").classList.add("nothing")
    document.querySelector(".calcContainer").classList.add("calculator")
}
function screenBack() { 
    document.querySelector(".mainContainer").classList.remove("nothing")
    document.querySelector(".calcContainer").classList.remove("calculator")
}
