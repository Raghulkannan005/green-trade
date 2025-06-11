import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const response = await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected DB :", response.connection.name)
    }
    catch(err){
        console.log("Error connecting to Green Trade Database : ", err)
    }
}