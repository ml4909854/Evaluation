const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    username:{type:String , unique:true , required:true},
    password:{type:String, require:true},
    role:{type:String, enum:["admin" , "member"]},
    name:{type:String ,required:true },
    email:{type:String , required:true , unique:true},
    borrowedBooks:{type:mongoose.Schema.Types.ObjectId , ref:"book"}
})

module.exports = mongoose.model("user" , UserSchema)