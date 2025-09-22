const { Op } = require('sequelize');
const { Todo } = require('../models');

const createTodo = async(title, description, isCompleted) => {
    const todo = await Todo.create({ title: title, description: description, isCompleted: isCompleted });
    return todo;
};

const getAllTodos = async(offset, limit, title, description, userId) => {
    const whereClause = [];
    if (title || !(title || description)){
        whereClause.push({ title: {[Op.iLike]: `%${title}%`} });
    }
    if (description){
        whereClause.push({ description: {[Op.iLike]: `%${description}%`} });
    }
    const todos = await Todo.findAll(
        { 
            offset: offset, 
            limit: limit,
            where: {
                [Op.and]: {
                    createdBy: userId, 
                    [Op.or]: whereClause,
                }
            },
            order: [['createdAt', 'DESC']]
        }
    );
    return todos;
};

const getTodo = async(todoId) => {
    const todo = await Todo.findByPk(todoId);
    return todo;
};

const getTodosCount = async(title, description, userId) => {
    const whereClause = [];
    if (title || !(title || description)){
        whereClause.push({ title: {[Op.iLike]: `%${title}%`} });
    }
    if (description){
        whereClause.push({ description: {[Op.iLike]: `%${description}%`} });
    }
    const todosCount = await Todo.count({
        where: {
            [Op.and]: {
                createdBy: userId, 
                [Op.or]: whereClause,
            }
        },
    });
    return todosCount;
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

const isUserAuthorized = (todo, user) => {
    return todo.createdBy === user.id;
};

module.exports = {createTodo, getAllTodos, getTodo, getTodosCount, updateTodo, deleteTodo, updateTodoStatus, isUserAuthorized};