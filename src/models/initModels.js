const Users = require("./users.models");
const Courses = require("./courses.models");
const Videos = require("./videos.models");
const Categories = require("./categories.models");
const UserCourses = require("./userCourses.model");
const CourseCategories = require("./courseCategories.model");

const initModels = () => {
    UserCourses.belongsTo(Users, {as: "author", foreignKey:"user_id"});
    Users.hasMany(UserCourses, {as:"courses", foreignKey:"user_id"});

    UserCourses.belongsTo(Courses, {as: "course", foreignKey:"course_id"});
    Courses.hasMany(UserCourses, {as: "courses", foreignKey: "course_id"});

    CourseCategories.belongsTo(Categories, {as: "category", foreignKey: "category_id"});
    Categories.hasMany(CourseCategories, {as: "courses", foreignKey: "category_id"});

    CourseCategories.belongsTo(Courses, {as: "course", foreignKey: "course_id"});
    Courses.hasMany(CourseCategories, {as: "categories", foreignKey: "course_id"});

    Videos.belongsTo(Courses, {as: "course", foreignKey: "course_id"});
    Courses.hasMany(Videos, {as: "videos", foreignKey: "course_id"})
};

module.exports = initModels;