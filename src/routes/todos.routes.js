const { Router } = require('express');
const { getAllTasks, getTasksById, getTodosWithCategories, createTasks, updateTasks, deleteTasks,  } = require('../controllers/todos.controllers')
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

//localhost:8000/Tasks
//controlador
router.get('/tasks', authMiddleware, getAllTasks);

router.get('/tasks/:id', authMiddleware, getTasksById);

router.get('/todos/:id/categories', authMiddleware, getTodosWithCategories);

router.post('/tasks', authMiddleware, createTasks);

router.put('/tasks/:id', authMiddleware, updateTasks);

router.delete('/tasks/:id', authMiddleware, deleteTasks);


module.exports = router;