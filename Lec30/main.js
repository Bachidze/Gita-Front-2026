const express = require("express")

const app = express()
const PORT = 3030


app.use(express.json())

const animals = [
    {id:1,species:"Cow",age:2,color:"blackandwhite"}    
]

app.get("/",(req,res) => {
    res.json("this is / req")
})


app.get("/animals",(req,res) => {
    let {page=1,take=3} = req.query
    take > 3 ? take = 3 : take
    res.json(animals.slice((page-1) * take,page*take))
})

app.get("/animals/:id",(req,res) => {
    let {id} = req.params
    const findAnimal = animals.find(el => el.id === Number(id))
    res.json({data:findAnimal})
})


app.post("/animals",(req,res) => {
    const {species,age,color} = req.body
    const lastId = animals[animals.length -1]?.id || 0
    let newAnimal = {
        id:lastId + 1,
        age,
        color,
        species
    }
    animals.push(newAnimal)

    res.json({message:"წარმატებით დაემატა",data:animals})
})


app.delete("/animals/:id",(req,res) => {
    const {id} = req.params
    const index = animals.findIndex(el => el.id === Number(id))

    if(index === -1){
        return res.status(404).json({message:"id is invalid"})
    }

    let deletedAnimal = animals.splice(index,1)
    res.json({data:deletedAnimal})
})

app.put("/animals/:id",(req,res) => {
    const {id} = req.params
    const {species,age,color} = req.body
    const index = animals.findIndex(el => el.id === Number(id))
    if(index === -1){
        return res.status(404).json({message:"id is invalid"})
    }

    animals[index] = {
        ...animals[index],
        species:species  || animals[index].species,
        age:age || animals[index].age,
        color:color || animals[index].color
    }


    res.json({data:animals[index]})
})







app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})


