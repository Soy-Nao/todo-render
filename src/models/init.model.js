// vamos a importar todos nuestros modelos creados
const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');
const TodosCategories = require('./todos-categories.model');
const { BelongsTo } = require('sequelize');

const initModels = () => {
    // Users;
    // Todos;
    Categories;
    TodosCategories;
    // vamos a crear relaciones
    // hasOne
    // hasMany
    // BelongsTo
    Todos.belongsTo(Users, {as: "author", foreignKey: "user_id"});
    Users.hasMany(Todos, {as: "task", foreignKey: "user_id"});

    //relacion M-M
    TodosCategories.belongsTo(Todos, {as: "task", foreignKey: "todo_id"});
    Todos.hasMany(TodosCategories, {as: "categories", foreignKey: "todo_id"});

    TodosCategories.belongsTo(Categories, {as: "category", foreignKey: "category_id"});
    Categories.hasMany(TodosCategories, {as: "tasks", foreignKey: "category_id"});
};
    

module.exports = initModels;