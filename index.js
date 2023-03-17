const express = require("express")
const cors = require("cors")
const app = express()

const port = 3000
app.use(cors())

app.get("/logowanie/:password/:admin", function(req, res){      
    const password = req.params.password
    const admin = req.params.admin
})

app.listen(3000, ()=>{
    console.log("Aplikacja działa")
})