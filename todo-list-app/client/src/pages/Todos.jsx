import React from "react";
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import TodoList from "../components/todo/todoList";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    
    const fetchTodos = async () => {
        const response = await fetch("http://localhost:3000/api/v1/todos");
        const result = await response.json();
        return result;
    }

    useEffect(async() => {
        const result = await fetchTodos();
    }, [])

    return (
        <Container>
            <TodoList todos={todos}></TodoList>
        </Container>
    )
}


export default Todos;