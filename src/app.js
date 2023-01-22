//importabamos express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const usersRoutes = require('./routes/users.routes')
const todosRoutes = require('./routes/todos.routes')
const authRoutes = require('./routes/auth.routes');
const cors = require('cors');
require("dotenv").config();
//crear una instancia de express
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

// probando la conexion a la base de datos
db.authenticate()
  .then(() => console.log("autenticación exitosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
// devuelve una promesa y la resolvemos con then
db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});
console.log(process.env.PUERTO)
app.use('/api/v1' , usersRoutes);

app.use('/api/v1' , todosRoutes);

app.use('/api/v1' , authRoutes);

//definir la rutas de los endpoints (de ahora en adelante ep)
// todas la consultas de usuarios
//localhost:8000/users --> todo para usuarios
//localhost:8000/todos --> todo para tareas

//GET a /users

// app.get("/users", async (req, res) => {
//   try {
//     // vamos a obtener el resultado de consultar a todos los usuarios de la base de datos
//     const result = await Users.findAll(); // SELECT * FROM users;
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //Obtener un  usuario sabiendo su ID
// app.get("/users/:id", async (req, res) => {
//   try {
//     console.log(req.params);
//     const { id } = req.params;
//     const result = await Users.findByPk(id);
//     //res.send(id)
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //Obtener un usuario por username

// app.get("/users/username/:username", async (req, res) => {
//   try {
//     const { username } = req.params;
//     const result = await Users.findOne({ where: { username } }); // SELECT * FROM users where username = nao
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //Creando un usuario

// app.post("/users", async (req, res) => {
//   try {
//     const user = req.body;
//     const result = await Users.create(user);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     console.log(error);
//   }
// });

// //actualizar un usuario,solopodemos cambiar el password

// app.put("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const field = req.body;
//     const result = await Users.update(field, {
//       where: { id },
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// });

// //ELIMINAR UN USUARIO -->

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Users.destroy({
//       where: { id },
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// });

// //Obtener todas las tareas → GET localhost:8000/todos
// app.get("/todos", async (req, res) => {
//   try {
//     const result = await Todos.findAll();
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //Obtener una tarea por su id → GET localhost:8000/todos/:id
// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Todos.findByPk(id);
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //Crear una nuevo todo → POST localhost:8000/todos
// app.post("/todos", async (req, res) => {
//   try {
//     const todo = req.body;
//     const result = await Todos.create(todo);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     console.log(error);
//   }
// });

// //Actualizar un todo (actualizar la propiedad isComplete) → PUT localhost:8000/todos/:id
// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const field = req.body;
//     const result = await Todos.update(field, {
//       where: { id },
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// });

// //Eliminar una tarea → DELETE localhost:8000/todos
// app.delete("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Todos.destroy({
//       where: { id },
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// });
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
