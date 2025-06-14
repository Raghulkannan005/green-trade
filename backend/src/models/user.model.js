
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
    role:{
        enum : ['user', 'owner', 'admin'],
        type : String,
        required : true,
        default : "user"
    },
    product : [{
        type : Schema.Types.ObjectId,
        ref : 'product'
    }],
    shop : {
        type : Schema.Types.ObjectId,
        ref : 'Shop'
    },
    bookmark : [{
        type : Schema.Types.ObjectId,
        ref : 'product',

    }],
    createdAt : {
        type : Date,
        default : Date.now()
    }
},
{
    timestamps : true
})

const User = model('User', userSchema)
export default User


