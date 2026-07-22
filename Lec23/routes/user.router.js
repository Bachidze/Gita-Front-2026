const {Router} = require("express")
const usersModel = require("../models/users.model")
const { isValidObjectId } = require("mongoose")


const usersRouter = Router()


usersRouter.get("/",async (req,res) => {
    const findAllUser = await usersModel.find()
    res.json({message:"გილოცავ შენ წარამტებით წამოიღე ინფორმაცია ბაზიდან",data:findAllUser})
})


usersRouter.get("/:id",async (req,res) => {
    const {id} = req.params
    // console.log(id)

    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid id",data:null})
    }

    const findUserById = await usersModel.findById(id)

    res.json({message:"გილოცავ შენ წარამტებით იპოვე ჩანაწერი ID-ის მიხედვით",data:findUserById})
})



usersRouter.delete("/:id",async (req,res) => {
    const {id} = req.params

    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid id",data:null})
    }

    const findbyIdAndDeleteUser = await usersModel.findByIdAndDelete(id)

    res.json({message:"გილოცავ წარამტებით წაიშალა მონაცემი",data:findbyIdAndDeleteUser})
})




usersRouter.put("/:id",async (req,res) => {
    const {id} = req.params
    const {fullName,email} = req.body
    
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid id",data:null})
    }


    const findByIdAndUpdateUSer = await usersModel.findByIdAndUpdate(id,{fullName,email},{new:true})

    res.json({message:"გილოცავ შენ წარამტებით განაახლე მონაცემი",data:findByIdAndUpdateUSer})
})





module.exports = usersRouter