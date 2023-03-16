function checkLogin(){
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value

    const user = "admin"
    const admnPass = "admin"

    if(login==user && password==admnPass){
        console.log("zalogowano")
        localStorage.setItem("login", 'admin')
        window.location.href = "admin.html"
    }
    else{ 
        console.log("nie poprawny login")
        alert("Błędne hasło")
        localStorage.setItem("login", 'false')
    }
}

function checkAdmin(){
    const admin = localStorage.getItem("login")

    if(window.location.href = "admin.html"){

    if(admin != "admin"){
        window.location.href = "login.html"
    }
    }
}