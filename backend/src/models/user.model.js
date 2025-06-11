
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    product : [{
        type : Schema.Types.ObjectId,
        ref : 'product'
    }]
})

const User = model('User', userSchema)
export default User