import React from "react";
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import TodoList from "../components/todo/todoList";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    
    const fetchTodos = async (page=1) => {
        const response = await fetch(`http://localhost:3000/api/v1/todos?page=${page}`);
        const result = await response.json();
        return result;
    }

    const handlePageChange = (event, page) => {
        fetchTodos(page).then((result) => {
            setTodos(result.items);
        });
    }

    useEffect(() => {
        fetchTodos().then((result) => {
            setTodos(result.items);
            setTotalPages(result.totalPages);
        });
    }, [])

    return (
        <Container>
            <TodoList todos={todos} totalPages={totalPages} handlePageChange={handlePageChange}></TodoList>
        </Container>
    )
}


export default Todos;