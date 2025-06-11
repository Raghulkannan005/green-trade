import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import { connectDB } from './src/utils/db.js';

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


app.listen(PORT, ()=>{
    console.log(`Server running on PORT : ${PORT}`)
})

export default app