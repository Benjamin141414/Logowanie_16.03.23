

async function getUser(){
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value


    const data = await fetch(`http://localhost:3000/logowanie/${login}/${password}`)
    const json = await data.json()
    console.log(json)
}