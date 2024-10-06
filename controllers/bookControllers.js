const express = require("express");
const router = express.Router();
const BookModel = require("../models/book.models.js")
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const book = await BookModel.find();
    res.send({book:book});
  } catch (error) {
    res.json({error:error})
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const getbookById = await BookModel.findById(req.params.id);
    res.send({book:getbookById});
  } catch (error) {
    res.json({error:error})
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const Updatebook = await BookModel.findByIdAndUpdate( req.params.id ,...req.body);
    res.send({book:Updatebook});
  } catch (error) {
    res.json({error:error})
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const Deletebook= await BookModel.findByIdAndDelete( req.params.id);
    res.send({book:"book Deleted successfully"});
  } catch (error) {
    res.json({error:error})
  }
});

module.exports = router;
