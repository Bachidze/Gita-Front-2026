const express = require("express")
const ConectToMongo = require("./db/connectTomongo")
const app = express()
const PORT = 3030
require("dotenv").config()
ConectToMongo()


app.get("/", (req,res) => {
    res.json({message:"გილოცავ წარმატებით დარესფონსდა"})
})


app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})







