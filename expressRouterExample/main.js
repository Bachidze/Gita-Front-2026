const express = require("express")
const app = express()
const PORT = 3030

let animals = [
    {
        id:1,
        name:"nemo",
        color:"black and red"
    },
    {
        id:2,
        name:"nemo",
        color:"black and red"
    },
    {
        id:3,
        name:"nemo",
        color:"black and red"
    },
]

app.get("/",(req,res) => {
    res.json("this is / route")
})

app.get("/docs",(req,res) => {
    res.json("this is /docs route")
})

app.get("/community",(req,res) => {
    res.json("this is /community route")
})

app.get("/animals",(req,res) => {
    console.log(req.url)
    res.json(animals)
})

// app.get("/users/:id",(req,res) => {
//     console.log(req.params)
//     const {id} =req.params
//     console.log(id)
// })

app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})