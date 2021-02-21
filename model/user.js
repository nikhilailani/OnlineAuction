
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: String,
    lastName : String,
    Email : String,
    Mobile : String,
    profilePic : String
})


module.exports = mongoose.model("User", userSchema);