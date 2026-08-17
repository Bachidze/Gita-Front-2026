const express = require("express")
const app = express()

const PORT = 3030



const users = [
    {id:1,name:"giorgi"},
    {id:2,name:"giorgi"},
    {id:3,name:"giorgi"},
    {id:4,name:"giorgi"},
]

const products = [
    {id:1,title:"milk"},
    {id:2,title:"milk"},
    {id:3,title:"milk"},
    {id:4,title:"milk"},
]
const animals = [
    {id:1,species:"cow"},
    {id:2,species:"wolf"},
    {id:3,species:"dog"},
    {id:4,species:"fish"},
    {id:5,species:"elephant"},
]



app.get("/",(req,res) => {
    res.json("app.tsx")
})

app.get("/users",(req,res) => {
    res.json(users)
})


app.get("/products",(req,res) => {
    res.json(products)
})

app.get("/animals",(req,res) => {
    res.json(animals)
})


app.get("/animals/:id",(req,res) => {
    const {id} = req.params
   const animalByID = animals.find(el => el.id === Number(id))
   console.log(animalByID)
    res.json(animalByID)
})








app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})