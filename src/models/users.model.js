// instancia conexion base de datos
const db = require('../utils/database');

//tipos de datos de sequelize varchar (SQL) --> STRING
const {DataTypes } = require('Sequelize');

//definir el modelo de usuarios
//los modelos sedefinen con una Mayuscula

//parametros
//nombre de la tabla
// los atributos de las tablas ( OBJETO )
const Users = db.define("users", {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },	
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },		
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Users;