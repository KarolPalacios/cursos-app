const {Router} = require("express");
const {
  createCategories,
  deleteCategories
} = require("../controllers/categories.controllers");

const router = Router();

router.post('/category', createCategories);
router.delete('/category/:id', deleteCategories);

module.exports = router;