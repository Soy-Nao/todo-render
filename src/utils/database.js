const {Sequelize} = require('sequelize');
require("dotenv").config()

//crear una una instancia con parametros de configuración de nuestra base de datos
//un objeto  de configuración --> credenciales de mi base de datos
const db =new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER, 
    host : process.env.DB_HOST, //127.0.0.1
    post: process.env.DB_PORT,
    password: process.env.DB_PASSWORD, //pones tu contraseña
    dialect: "postgres",//la base de datos q estamos usando
    logging: false,
});

module.exports = db;