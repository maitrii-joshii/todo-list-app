const todoService = require("../services/todos");

const createTodo = async(req, res, next) => {
    try {
        const {
            title,
            description
        } = req.body;
        res.status(201).json({ data: await todoService.createTodo(title, description) });
    }
    catch(error) {
        next(error);
    }
};

const getAllTodos = async(req, res, next) => {
    try {
        res.status(200).json({ data: await todoService.getAllTodos() });
    }
    catch(error) {
        next(error);
    }
};

const getTodo = async(req, res, next) => {
    try {
        res.status(200).json({ data: await todoService.getTodo(req.params.todoId) });
    }
    catch(error) {
        next(error);
    }
};

const updateTodo = async(req, res, next) => {
    try {
        const {
            title,
            description
        } = req.body;
        res.status(204).json({ data: await todoService.updateTodo(req.params.todoId, title, description) });
    }
    catch(error) {
        next(error);
    }
};

const deleteTodo = async(req, res, next) => {
    try {
        res.status(204).json({ data: await todoService.deleteTodo(req.params.todoId) });
    }
    catch(error) {
        next(error);
    }
};

const markTodoComplete = async(req, res, next) => {
    try {
        res.status(200).json({ data: await todoService.updateTodoStatus(req.params.todoId, true) });
    }
    catch(error) {
        next(error);
    }
};

const markTodoIncomplete = async(req, res, next) => {
    try {
        res.status(200).json({ data: await todoService.updateTodoStatus(req.params.todoId, false) });
    }
    catch(error) {
        next(error);
    }
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    markTodoComplete,
    markTodoIncomplete,
};