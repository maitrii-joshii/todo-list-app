const express = require('express');
const auth = require('../middleware/auth');
const { createTodo, getAllTodos, getTodo, updateTodo, deleteTodo, markTodoComplete, markTodoIncomplete } = require('../controllers/todos');
const router = express.Router();

router.use(auth.authenticate());

router.post("/", createTodo);
router.get("/", getAllTodos);
router.get("/:todoId", getTodo);
router.put("/:todoId", updateTodo);
router.put("/:todoId/complete", markTodoComplete);
router.put("/:todoId/incomplete", markTodoIncomplete);
router.delete("/:todoId", deleteTodo);


module.exports = router;