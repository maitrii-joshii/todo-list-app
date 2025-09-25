import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import TodoList from "../components/todo/todoList";

const Todos = () => {

    return (
        <Container>
            <TodoList></TodoList>
        </Container>
    )
}


export default Todos;