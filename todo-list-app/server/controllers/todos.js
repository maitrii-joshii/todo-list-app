const todoService = require("../services/todos");
const { Todo } = require('../models');
const { getUser } = require('../utils/context');

const createTodo = async(req, res, next) => {
    try {
        const {
            title,
            description
        } = req.body;
        return res.status(201).json({ data: await todoService.createTodo(title, description) });
    }
    catch(error) {
        next(error);
    }
};

const getAllTodos = async(req, res, next) => {
    try {
        const user = getUser();
        const limit = req.query.size || 10;
        const offset = ((req.query.page || 1) - 1) * limit;
        const title = req.query.title || '';
        const description = req.query.description || '';
        const currentPage = req.query.page || 1;
        const size = limit;
        const todosCount = await todoService.getTodosCount(title, description, user.id);
        const totalPages = Math.ceil(todosCount / size);
        const todos = await todoService.getAllTodos(offset, limit, title, description, user.id);
        const response = {
            items: todos,
            page: currentPage,
            size: size,
            totalPages: totalPages,
            total: todosCount 
        }
        return res.status(200).json(response);
    }
    catch(error) {
        next(error);
    }
};

const getTodo = async(req, res, next) => {
    try {
        const user = getUser();
        const todo = await todoService.getTodo(req.params.todoId);
        if (todo) {
            if (todoService.isUserAuthorized(todo, user)) {
                return res.status(200).json({ data: todo });
            }
            return res.status(403).json();
        }
        return res.status(404).json();
    }
    catch(error) {
        next(error);
    }
};

const updateTodo = async(req, res, next) => {
    try {
        const user = getUser();
        const {
            title,
            description
        } = req.body;
        const todo = await todoService.getTodo(req.params.todoId);
        if (todo) {
            if (todoService.isUserAuthorized(todo, user)) {
                return res.status(204).json({ data: await todoService.updateTodo(req.params.todoId, title, description, user.id) });
            }
            return res.status(403).json();
        }
        return res.status(404).json();
    }
    catch(error) {
        next(error);
    }
};

const deleteTodo = async(req, res, next) => {
    try {
        return res.status(204).json({ data: await todoService.deleteTodo(req.params.todoId) });
    }
    catch(error) {
        next(error);
    }
};

const markTodoComplete = async(req, res, next) => {
    try {
        const user = getUser();
        const todo = await todoService.getTodo(req.params.todoId);
        if (todo) {
            if (todoService.isUserAuthorized(todo, user)) {
                return res.status(200).json({ data: await todoService.updateTodoStatus(req.params.todoId, true) });
            }
            return res.status(403).json();
        }
        return res.status(404).json();
    }
    catch(error) {
        next(error);
    }
};

const markTodoIncomplete = async(req, res, next) => {
    try {
        const user = getUser();
        const todo = await todoService.getTodo(req.params.todoId);
        if (todo) {
            if (todoService.isUserAuthorized(todo, user)) {
                return res.status(200).json({ data: await todoService.updateTodoStatus(req.params.todoId, false) });
            }
            return res.status(403).json();
        }
        return res.status(404).json();
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