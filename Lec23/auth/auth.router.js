const {Router, json} = require("express")
const usersModel = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authRouter = Router()

authRouter.post("/sign-up",async (req,res) =>{
    const {fullName,email,password} = req.body

    if(!fullName || !email || !password){
        return res.status(400).json({message:"fullname email and password is require field"})
    }

    const exsisitingUser = await usersModel.findOne({email:email})

    if(exsisitingUser){
        return res.status(400).json({messsage:"ასეთი მომხამრებელი უკვე არსებობს სცადე განსხვავებული ელფოსტა !!!"})
    }

    const hashedPass = await bcrypt.hash(password,10)

    await usersModel.create({fullName,email,password:hashedPass})

    res.json({message:"მომხმარებელი დაემატა წარამტებით"})
})


authRouter.post("/sign-in",async (req,res) =>{
    const {email,password} = req.body


    if(!email || !password){
        return res.status(400).json({message:"email and password is require field"})
    }

    
    const exsisitingUser = await usersModel.findOne({email:email})

    if(!exsisitingUser){
        return res.status(400).json({messsage:"ასეთი მომხამრებელი არ არსებობს გაიარა sign-up"})
    }


    const isEqualPass = await bcrypt.compare(password,exsisitingUser.password)

    if(!isEqualPass){
        return res.status(400).json({message:"invalid Credentals"})
    }

    const payLoad = {
        userId:exsisitingUser._id
    }

    const token  = jwt.sign(payLoad,process.env.JWT_SECRET,{expiresIn:"1h"})

  res.json({message:"ტოკენი",data:token})
})


module.exports = authRouter