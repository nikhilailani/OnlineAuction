
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema({
    category : String,
    name : String,
    brand: String,

    owner : String,
    
    minBidPrice : Number,
    bidDate : Date,
    bidDuration : Number,
    
    usersToNotify : Array,
    
 







    image1: String

})


module.exports = mongoose.model("Product", productSchema);