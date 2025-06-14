import bcrypt from "bcryptjs"

import User from "../models/user.model.js"

export const registerHandler = async ( req, res )=>{
    const { username, password, phone } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        username : username,
        password : hashedPassword,
        phone    : phone
    })

    res.status(201).json({
        message : "User registered successfully",
        user : newUser
    })
}

export const loginHandler = async (req, res)=>{

    const { phone, password } = req.body
    if(!phone || !password){
        res.status(400).json({
            message : "Phone and password are required"
        })
    }
    const user = await User.findOne({ phone : phone })
    if(!user){
        res.status(400).json({
            message : "User not found"
        })
    }

    const isAuthorized = await bcrypt.compare( password, user.password)

    if(!isAuthorized){
        res.status(403).json({
            message : "Invalid credentials"
        })
    }

    res.status(200).json({
        message : "Login successful"
    })

}