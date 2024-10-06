const jwt = require("jsonwebtoken")
const auth = (req , res, next)=>{
   try {
    const token = req.headers.auth
    const decoded = jwt.verify(token , "masai")
    req.user = decoded
    if(decoded){
        next()
    }
    else{
        res.send(error)
    }
   } catch (error) {
    res.send(error)
   }
}
module.exports = auth