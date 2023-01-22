const { Router } = require('express');
const { getAllUsers, getUserById, getUserWithTasks, createUser,updateUser, deleteUser, getUserTodosCategory, } = require('../controllers/users.controllers');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

//localhost:8000/users
//controlador
router.get('/users', authMiddleware, getAllUsers);

router.get('/users/:id', authMiddleware, getUserById);

//obtener un usuario con sus tareas
router.get('/users/:id/todos', authMiddleware, getUserWithTasks);

router.post('/users', createUser);

router.put('/users/:id', authMiddleware, updateUser);

router.delete('/users/:id', authMiddleware, deleteUser);
module.exports = router;