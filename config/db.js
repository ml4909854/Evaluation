const mongoose = require("mongoose")
const mongoUrl = "mongodb://127.0.0.1:27017/Library"

const connectDb = ()=>{
    return mongoose.connect(mongoUrl)
}
module.exports = connectDb