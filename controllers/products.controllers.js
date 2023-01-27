const query = require("../db/utils");

const findAll = async () => {
  return await query("SELECT * FROM products");
};

const findOne = async (id) => {
  return await query("SELECT * FROM products WHERE ProductID = ?", [
    id,
  ]);
};

const addOne = async (product) => {
    return await query("INSERT INTO products SET ?", [product]);
  };
  
  const updateOne = async (id, product) => {
    return await query("UPDATE products SET ? WHERE ProductID = ?", [
      product,
      id,
    ]);
  };
  
  const removeOne = async (id) => {
    return await query("DELETE FROM products WHERE ProductID = ?", [id]);
  };

  module.exports = {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne,
  };