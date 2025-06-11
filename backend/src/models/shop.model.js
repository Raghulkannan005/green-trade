import {Schema , model} from "mongoose"

const shopSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true
    },
    products : [{
        type : Schema.Types.ObjectId,
        required : true
    }]
})

const Shop = model('Shop', shopSchema)
export default Shop