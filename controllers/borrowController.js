const express = require("express");
const router = express.Router();
const BorrowModel = require("../models/borrowing.models.js")
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const borrow = await BorrowModel.find();
    res.send({borrow:borrow});
  } catch (error) {
    res.json({error:error})
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const getborrowById = await BorrowModel.findById(req.params.id);
    res.send({borrow:getborrowById});
  } catch (error) {
    res.json({error:error})
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const Updateborrow = await BorrowModel.findByIdAndUpdate( req.params.id ,...req.body);
    res.send({borrow:Updateborrow});
  } catch (error) {
    res.json({error:error})
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const Deleteborrow= await BorrowModel.findByIdAndDelete( req.params.id);
    res.send({borrow:"borrow Deleted successfully"});
  } catch (error) {
    res.json({error:error})
  }
});

module.exports = router;
