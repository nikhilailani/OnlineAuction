
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema({
    category : String,
    name : String,
    brand: String,
    
    minBidPrice : Number,
    bidDate : Date,
    bidDuration : Number,
    
    usesToNotify : Array,
    
 







    photo: String

})


module.exports = mongoose.model("Product", productSchema);