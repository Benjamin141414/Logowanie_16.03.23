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
    const uzytkownik = req.params.uzytkownik
    const password = req.params.password

    for(let i=0; i<=users.lenght-1; i++){
        if(users[i].user==user && users[i].pass == pass){
            res.send({user: user, uprawnienia: users[i].uprawnienia})
        }
    }
        res.json({satus: "niezalogowano"})
})

app.listen(3000, ()=>{
    console.log("Aplikacja działa")
})