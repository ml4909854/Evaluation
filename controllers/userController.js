const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.models");
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    console.log(req.user.role)
    const user = await UserModel.find();
    res.send({user:user});
  } catch (error) {
    res.json({error:error})
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const getUserById = await UserModel.findById(req.params.id);
    res.send({user:getUserById});
  } catch (error) {
    res.json({error:error})
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const UpdateUser = await UserModel.findByIdAndUpdate( req.params.id ,...req.body);
    res.send({user:UpdateUser});
  } catch (error) {
    res.json({error:error})
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const DeleteUser= await UserModel.findByIdAndDelete( req.params.id);
    res.send({user:"user Deleted successfully"});
  } catch (error) {
    res.json({error:error})
  }
});

module.exports = router;
