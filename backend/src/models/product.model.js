import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required : true,
        default : 0
    },
    price : {
        type : Number,
        required : true,
        default : 0
    },
    shop : {
        type : Schema.Types.ObjectId,
        ref : 'shop',
        required : true
    }

})

const Product = model("product", productSchema)
export default Product