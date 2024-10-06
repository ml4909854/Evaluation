const express = require("express");
const connectDb = require("./config/db.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const server = express();
const UserModel = require("./models/user.models.js");
const userController = require("./controllers/userController.js");
const authorController = require("./controllers/authorController.js");
const borrowController = require("./controllers/borrowController.js");
const bookController = require("./controllers/bookControllers.js");

server.use(express.json());
server.use("/api/users", userController);
server.use("/api/authors", authorController);
server.use("/api/books", bookController);
server.use("/api/borrowings", borrowController);

server.post("/api/auth/register", async (req, res) => {
    const{username , password , name , email , role} = req.body
  try {
    const Allreadyexists = await UserModel.findOne({email})
    if(Allreadyexists){
        res.send("user already exits")
    }

    const hashpasswords = await bcrypt.hash(password , 10)

    const user = new UserModel({username , password:hashpasswords ,name, email , role });
    const savedUser = await user.save();
    res.json({ message: "user is saved", newUser: savedUser });
  } catch (error) {
    res.send(error);
  }
});


server.post("/api/auth/login", async(req, res) => {
  try {
    const {username , password} = req.body
    const loginUser = await UserModel.findOne({ username });
    if (!loginUser) {
       res.send("user not found");
    }
    const comparePassword = await bcrypt.compare(password , loginUser.password)
    if(!comparePassword){
        res.json({meqssage:"password is incorrect"})
    }
    const token = jwt.sign({email:loginUser.email, role:loginUser.role} , "masai")
    res.json({message:"login successfull" , token});
  } catch (error) {}
});



server.listen(3000, async () => {
  await connectDb();
  console.log("server is connected database also connected");
});
