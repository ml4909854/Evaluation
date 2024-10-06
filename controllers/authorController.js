const express = require("express");
const router = express.Router();
const AuthorModel = require("../models/author.model.js")
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const author = await AuthorModel.find();
    res.send({author:author});
  } catch (error) {
    res.json({error:error})
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const getauthorById = await AuthorModel.findById(req.params.id);
    res.send({author:getauthorById});
  } catch (error) {
    res.json({error:error})
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const Updateauthor = await AuthorModel.findByIdAndUpdate( req.params.id ,...req.body);
    res.send({author:Updateauthor});
  } catch (error) {
    res.json({error:error})
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const Deleteauthor= await AuthorModel.findByIdAndDelete( req.params.id);
    res.send({author:"author Deleted successfully"});
  } catch (error) {
    res.json({error:error})
  }
});

module.exports = router;
