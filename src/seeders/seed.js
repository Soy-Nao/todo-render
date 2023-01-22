const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");	
const Categories = require('../models/categories.model');
const TodosCategories = require('../models/todos-categories.model');
const Categories = require("../models/categories.model");
const users = [
  {
    //id: 1,
    username: "Nao",
    email: "nao@gmail.com",
    password: "1234",
  },
  {
    //id : 2,
    username: "Stivents",
    email: "stivents@gmail.com",
    password: "1234",
  },
  {
    //id : 3,
    username: "Will",
    email: "will@gmail.com",
    password: "1234",
  },
];

const todos = [
  {
    title: "Estudiar node",
    description: "Tarea 1 Description",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    description: "Tarea 1 y 2 Description",
    userId: 1,
  },
  {
    title: "Lavar platos",
    userId: 2,
  },
  {
    title: "Ir a chequeo mensual",
    description: "Tarea 3 Description node no me deja",
    userId: 3,
  },
];

const categories = [
  {name: 'personal '},
  {name: 'educacion'},
  {name: 'salud'},
  {name: 'trabajo'},
  {name: 'hogar'},
  {name: 'cocina'},
  {name: 'deporte'},
  {name: 'ocio'},
  {name: 'financiero'},
  {name: 'entretenimiento'}
];

const todosCategories = [
  {categoryId: 1, todoId: 1},
  {categoryId: 2, todoId: 1},
  {categoryId: 4, todoId: 1},
  {categoryId: 1, todoId: 2},
  {categoryId: 7, todoId: 2},
  {categoryId: 10, todoId: 2},
  {categoryId: 3, todoId: 2},
  {categoryId: 5, todoId: 3},
  {categoryId: 6, todoId: 3},
  {categoryId: 1, todoId: 4},
  {categoryId: 3, todoId: 4}

];

// create
// findOne, findAll, findByPk
// update
// destroy

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category))
    },200);
    setTimeout(() => {
      todosCategories.forEach((tc) => TodosCategories.create(tc))
    },300)
  })
  .catch((error) => console.log(error));
