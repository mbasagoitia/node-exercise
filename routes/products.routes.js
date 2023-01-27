const express = require("express");
const { products } = require("../controllers");

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await products.findOne(id);
  } else {
    data = await products.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let newProduct = req.body;
  let data = await products.addOne(newProduct);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let updateProduct = req.body;
  let data = await products.updateOne(id, updateProduct);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await products.removeOne(id);
  res.json(data);
});

module.exports = router;