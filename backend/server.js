import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import bcrypt from "bcryptjs"

import { connectDB } from './src/utils/db.js';
import User from "./src/models/user.model.js"
import Shop from "./src/models/shop.model.js"

import authRouter from "./src/routes/auth.router.js"

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

connectDB()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.status(200).json({
        message : "Green Trade API is Working Perfectly"
    })
})

app.use("/auth", authRouter)

app.get("/shops", async (req, res)=>{
    const shops = await Shop.find()
    res.status(200).json({
        message : "Shops fetched successfully",
        data : shops
    })
})

app.get("/users", async (req, res)=>{
    const users = await User.find()
    res.status(200).json({
        message : "Users fetched successfully",
        data : users
    })
})

app.get("/users", async (req,res)=>{
    const users = await User.find()
    res.status(200).json(users)
})

app.get("/user/:id", async (req, res)=>{
    const { id } = req.params;

    const user = await User.findById(id)

    res.status(200).json({
        message : `User : ( ${user.name} ) \n fetched successfully `,
        data : user
    })
})

app.get("/shop/:id", async (req, res)=>{
    const { id } = req.params;
    try{
        const shop = await Shop.findById(id)
        res.status(200).json({
        message : `Shop : ( ${shop.name} ) \n Shop fetched successfully`,
        data : shop
    })
    }
    catch(err){
        res.status(500).json({
            message : "Internal server error"
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running on PORT : ${PORT}`)
})
