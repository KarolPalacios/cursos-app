const CategoryServices = require("../services/category.services");

const createCategories = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await CategoryServices.create(newCategory);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCategories = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await CategoryServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createCategories,
  deleteCategories
};