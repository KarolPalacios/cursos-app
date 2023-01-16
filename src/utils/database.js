const {Sequelize} = require("sequelize");

const db = new Sequelize({
    database: "cursos",
    username: "postgres",
    host: "localhost",
    port: "5432",
    password: "0624",
    dialect: "postgres",
});

module.exports = db;