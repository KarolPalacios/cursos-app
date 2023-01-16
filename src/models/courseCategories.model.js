const db = require("../utils/database");
const {DataTypes} = require("sequelize");
const Categories = require("./categories.models");

const CourseCategories = db.define("course_categories", {
  id: {
    primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
  },

  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
  },

  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
      model: Categories,
      key: "id"
    }
  }

},

{
  timestamps: false
}
);

module.exports = CourseCategories;