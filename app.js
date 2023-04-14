

async function getUser(){
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value

    const data = await fetch(`http://localhost:3000/logowanie/${login}/${password}`)
    const json = await data.json()
    console.log(json)

    if(json.user != undefined){
        localStorage.setItem("upr", JSON.stringify(json))   //klucz w localstorage tak sie nazywa
    }
    else{
        localStorage.setItem("upr", "false")
    }
}


function checkUser(){
    const user = JSON.parse(localStorage.getItem("upr"))/*Formatuje w JSON i pobiera dane z tego klucza upr z localstorage
                                                         i to tylko po to zeby bylo w formacie json a nie zapisane jako format string*/
    console.log(user)

    const url = window.location.href

    if(user.uprawnienia != "admin" && url.includes("admin.html")){  //url includes sprawdza aktualną strone i moze przekierowac na strone
        window.location.href = "login.html"
    }

    if((user.uprawnienia != "user" || user.upr!="admin")  &&  url.includes("user.html")){
        window.location.href = "login.html"
    }

}