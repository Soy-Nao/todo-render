const TodosServices = require("../services/todos.services");

const getAllTasks = async (req, res) => {
  try {
    const result = await TodosServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTasksById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createTasks = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await TodosServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodosServices.update(field,id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.delete(id);
  } catch (error) {
    res.status(400).json(error.message);
    
  }
};

const getTodosWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getWithCategories(id);
    res.json({
      message: "Envinado tareas con categorias",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.messages,
      details: error.stack,
    });
  }
};

module.exports = {
  getAllTasks,
  getTasksById,
  createTasks,
  updateTasks,
  deleteTasks,
  getTodosWithCategories,
}
