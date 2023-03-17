const express = require("express")
const cors = require("cors")
const app = express()

const port = 3000
app.use(cors())

const users = [
    {user: "admin", pass:"admin", uprawnienia:"admin"},
    {user: "user", pass:"user", uprawnienia:"user"},
    {user: "Jan", pass:"Kowalski", uprawnienia:"user"}
]

//endpoint do sprawdzania czy mamy takiego user-a
app.get("/logowanie/:uzytkownik/:password", (req, res)=>{      
    const user = req.params.uzytkownik
    const pass = req.params.password

    for(let i=0; i<=users.length-1; i++){
        if(users[i].user==user && users[i].pass == pass){
            res.send({user: user, uprawnienia: users[i].uprawnienia})
        }
    }
        res.json({satus: "niezalogowano"})
})

app.listen(port, ()=>{
    console.log("Aplikacja działa")
})