function checkLogin(){
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value

    const admLog = "admin"
    const admnPass = "admin"

    const userLog = "user"
    const userPass = "user"

    if(login==userLog && password==userPass){
        console.log("zalogowano")
        localStorage.setItem("login", 'user')
        window.location.href = "user.html"
    }
    else{ 
        console.log("nie poprawny login")
        alert("Błędne hasło")
        localStorage.setItem("login", 'false')
    }


    if(login==admLog && password==admnPass){
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
    
    if(admin != "admin"){
        window.location.href = "login.html"
    }
}


function checkUser(){
    const user = localStorage.getItem("login")
    
    if(user != "user"){
        window.location.href = "login.html"
    }
}