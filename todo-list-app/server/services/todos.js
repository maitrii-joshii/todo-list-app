const { Todo } = require('../models');

const createTodo = async(title, description, isCompleted) => {
    const todo = await Todo.create({ title: title, description: description, isCompleted: isCompleted });
    return todo;
};

const getAllTodos = async() => {
    const todos = await Todo.findAll();
    return todos;
};

const getTodo = async(todoId) => {
    const todo = await Todo.findByPk(todoId);
    return todo;
};

const updateTodo = async(todoId, title, description) => {
    const todo = await getTodo(todoId);
    todo.set({ title: title, description: description });
    await todo.save();
    return todo;
};

const updateTodoStatus = async(todoId, isCompleted) => {
    const todo = await getTodo(todoId);
    todo.set({ isCompleted: isCompleted });
    await todo.save();
    return todo;
};

const deleteTodo = async(todoId) => {
    const todo = await getTodo(todoId);
    await todo.destroy();
    return true;
};

module.exports = {createTodo, getAllTodos, getTodo, updateTodo, deleteTodo, updateTodoStatus};